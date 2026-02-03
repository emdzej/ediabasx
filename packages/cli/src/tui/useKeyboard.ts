import { useInput } from "ink";

export type KeyboardHandlers = {
  isSearchActive: boolean;
  onUp: () => void;
  onDown: () => void;
  onLeft: () => void;
  onRight: () => void;
  onEnter: () => void;
  onSearch: () => void;
  onSearchInput: (value: string) => void;
  onSearchBackspace: () => void;
  onSearchSubmit: () => void;
  onSearchCancel: () => void;
  onToggleHelp: () => void;
  onQuit: () => void;
};

export function useKeyboard(handlers: KeyboardHandlers): void {
  useInput((input, key) => {
    if (handlers.isSearchActive) {
      if (key.escape) {
        handlers.onSearchCancel();
        return;
      }
      if (key.return) {
        handlers.onSearchSubmit();
        return;
      }
      if (key.backspace || key.delete) {
        handlers.onSearchBackspace();
        return;
      }
      if (input) {
        handlers.onSearchInput(input);
      }
      return;
    }

    if (key.upArrow || input === "k") {
      handlers.onUp();
      return;
    }
    if (key.downArrow || input === "j") {
      handlers.onDown();
      return;
    }
    if (key.leftArrow || input === "h") {
      handlers.onLeft();
      return;
    }
    if (key.rightArrow || input === "l") {
      handlers.onRight();
      return;
    }
    if (key.return) {
      handlers.onEnter();
      return;
    }
    if (input === "/") {
      handlers.onSearch();
      return;
    }
    if (input === "?" ) {
      handlers.onToggleHelp();
      return;
    }
    if (input === "q" || input === "Q") {
      handlers.onQuit();
    }
  });
}
