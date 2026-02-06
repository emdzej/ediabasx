# legrp.prg

## General

|  |  |
| --- | --- |
| File | legrp.prg |
| Type | PRG |
| Jobs | 2 |
| Tables | 1 |
| Origin | BMW AG, Fr. Schmid, VS-42 |
| Revision | 2.0 |
| Author | Siemens AG, H.Richter |
| ECU Comment | Zu einem String mit Varianten werden in einem |

## Info

_No INFO results._

## Jobs

### INITIALISIERUNG

Initialisierung Dieser Job wird vom EDIABAS automatisch beim erstem Zugriff auf eine SGBD aufgerufen. Bei weiteren Zugriffen auf die selbe SGBD wird dieser Job nicht mehr aufgerufen. in der INITIALISIERUNG werden alle Funktionen aufgerufen, die nur einmal, vor der Kommunikation mit einem SG notwendig sind.

_No arguments._

### LESEN_GRUPPE

_No description._

| Name | Type | Description |
| --- | --- | --- |
| VAR_NAME_LIST | string | Variantennamen, Liste durch & getrennt |

## Tables

### GRU_LISTE

| GRUPPE | SGBD |
| --- | --- |
| d_002e | edc4 |
| d_0081 | rip |
| d_0072b | bfs_64 |
| d_0070 | dws |
| d_0065 | ekp_ds2 |
| d_0065 | ekp2ds2 |
| d_0076 | cdc_46 |
| d_0031 | ehpsr50 |
| d_0048 | jbit |
| d_0048 | jbit2 |
| d_0047 | fond_bt |
| d_009c | cvm_ii |
| d_009c | cvm_iii |
| d_009c | cvm_iv |
| d_009c | cvm_r52 |
| d_009c | cvm_52_2 |
| d_00ce | sbe2 |
| d_005a | elv |
| d_00cd | mid |
| d_0066 | alc_ds2 |
| d_0020 | eml12 |
| d_0022 | eml3 |
| d_0016 | toens |
| d_0016 | toens_2 |
| d_0036 | ascmk4g1 |
| d_0036 | ascmk4 |
| d_0036 | asc_t |
| d_00b0 | ses |
| d_0028 | rcc |
| d_0014 | dm5212l2 |
| d_0014 | dm5212l0 |
| d_0014 | dm5212l3 |
| d_000d | kombi36 |
| d_000d | kombi361 |
| d_0013 | dm5212l5 |
| d_0013 | dde41kl0 |
| d_0013 | ems2k |
| d_0010 | dm33s501 |
| d_0010 | dm5212r0 |
| d_0010 | dm5212r2 |
| d_0010 | dm331k20 |
| d_0010 | dm173k20 |
| d_0010 | dm172k20 |
| d_0010 | ms401k20 |
| d_0010 | dm5212r3 |
| d_0010 | dde21k20 |
| d_0010 | dde21k21 |
| d_0057 | lws5 |
| d_0057 | lws5_1b |
| d_0057 | lws5_2 |
| d_0057 | lws5__ |
| d_00ac | ehc |
| d_00ac | ehc_2n2 |
| d_00a7 | fg38 |
| d_00a7 | fhk38 |
| d_0040 | fbzv |
| d_00c2 | svt_83 |
| d_0074 | oc3 |
| d_009a | lwr2a |
| d_00e0 | iris |
| d_003b | video_gt |
| d_00ed | video_tv |
| d_00ed | videomod |
| d_00ed | video_3 |
| d_00ed | vm5ibus |
| d_00a0 | fond_zis |
| d_00c0 | zis |
| d_0030 | ccm38 |
| d_006a | dsp |
| d_006a | dsp2 |
| d_006a | dsp_r50 |
| d_006a | topdsp |
| d_006a | topdsp2 |
| d_00ea | dsp_bt |
| d_00c8 | telefon |
| d_00c8 | bit |
| d_00c8 | bit2 |
| d_00c8 | tel_us |
| d_00c8 | ulf |
| d_00c8 | telibus |
| d_00c8 | telibus2 |
| d_00bb | nav_jap |
| d_00bb | nav_jap2 |
| d_00bb | jnav_ce |
| d_00bb | jnav_ce2 |
| d_00f0 | bmbt46rn |
| d_00f0 | bordmoni |
| d_00f0 | bmbt46tn |
| d_00f0 | bmbt_mir |
| d_00f0 | bm_wide |
| d_00f0 | bmbtr50 |
| d_00f0 | bm46wide |
| d_0008 | shd46 |
| d_0008 | shd46_2 |
| d_0008 | sd_ds2 |
| d_00e8 | aic |
| d_00e8 | rls_ds2 |
| d_00da | easy_e_b |
| d_00da | bsm46c_4 |
| d_00da | bsm46c_5 |
| d_0072 | sm46_4 |
| d_0072 | sm46_3 |
| d_0072 | easy_e_f |
| d_0072 | sm53_4 |
| d_0072 | sm53_6 |
| d_0072 | sm46c_4 |
| d_0072 | sm46c_5 |
| d_0072 | sm46c_4m |
| d_0072 | sm46c_5m |
| d_0072 | fas_63 |
| d_00d0 | lsz |
| d_00d0 | lme38 |
| d_00d0 | lcm |
| d_00d0 | lcm_a |
| d_00d0 | lcm_ii |
| d_00d0 | lcm_iii |
| d_00d0 | lsz_2 |
| d_00d0 | lcm_iv |
| d_007f | navmk2 |
| d_007f | navmk3 |
| d_007f | navmk4 |
| d_007f | navmk4_2 |
| d_00a4 | mrs2 |
| d_00a4 | mrs3 |
| d_00a4 | mrs4 |
| d_00a4 | mrs4rd |
| d_00a4 | mrs5k |
| d_00a6 | fgr2_5 |
| d_0050 | mfl2 |
| d_0050 | mfl |
| d_0050 | mflr50 |
| d_0068 | radio |
| d_0044 | ews3 |
| d_0044 | ews |
| d_0044 | ews3d |
| d_0080 | kombi46 |
| d_0080 | ike |
| d_0080 | iki |
| d_0080 | kombi39 |
| d_0080 | kombi39c |
| d_0080 | kombi36c |
| d_0080 | kombi52 |
| d_0080 | kombir50 |
| d_0080 | kombi85 |
| d_0080 | kombi50f |
| d_0080 | kombi46r |
| d_0060 | pdcact |
| d_0060 | pdce38 |
| d_0012 | bms46ds0 |
| d_0012 | ms420ds0 |
| d_0012 | dde30ds0 |
| d_0012 | ms410ds1 |
| d_0012 | ms410ds2 |
| d_0012 | ms410ds3 |
| d_0012 | ms411ds1 |
| d_0012 | ms411ds2 |
| d_0012 | bms46ds1 |
| d_0012 | bms43ds0 |
| d_0012 | bmss501 |
| d_0012 | dm338ds1 |
| d_0012 | dm5212r5 |
| d_0012 | dm524ds0 |
| d_0012 | dm528ds0 |
| d_0012 | dm528ds3 |
| d_0012 | dm338ds0 |
| d_0012 | dde40kw0 |
| d_0012 | dm5212l6 |
| d_0012 | dm5212r6 |
| d_0012 | dde41kr0 |
| d_0012 | ms430ds0 |
| d_0012 | me72kwp0 |
| d_0012 | me72kwp1 |
| d_0012 | mss52ds1 |
| d_0012 | mss52ds0 |
| d_0012 | mss54ds0 |
| d_0012 | carbpr |
| d_0012 | dde22ds0 |
| d_0012 | me9k42 |
| d_0012 | dde50k47 |
| d_0012 | me9k_ng4 |
| d_0012 | d50m47a |
| d_0012 | d40tmca |
| d_0012 | d50m57a1 |
| d_0012 | d50m47b1 |
| d_0012 | d50m57b1 |
| d_0012 | d40m57a1 |
| d_0000 | zke3 |
| d_0000 | zke4 |
| d_0000 | zke5 |
| d_0000 | zke5_s12 |
| d_0056 | dsc_e46 |
| d_0056 | ascmk20 |
| d_0056 | absmk20 |
| d_0056 | asc4gus |
| d_0056 | ascmk4g |
| d_0056 | asc5 |
| d_0056 | absmk4g |
| d_0056 | dsc5 |
| d_0056 | dsc3 |
| d_0056 | abs5 |
| d_0056 | asc5d |
| d_0056 | asc57 |
| d_0056 | abd5 |
| d_0056 | dsc57 |
| d_0032 | gs8600 |
| d_0032 | gs834 |
| d_0032 | gs20 |
| d_0032 | gs8602 |
| d_0032 | gs8603 |
| d_0032 | gs8604 |
| d_0032 | smg2 |
| d_0032 | gs30 |
| d_0032 | gs870 |
| d_005b | ihka36 |
| d_005b | ihkr38 |
| d_005b | ihka38 |
| d_005b | ihka38_2 |
| d_005b | ihka38_3 |
| d_005b | ihr39 |
| d_005b | ihkr39 |
| d_005b | ihka39 |
| d_005b | ihka39_2 |
| d_005b | ihka39_3 |
| d_005b | ihka39_4 |
| d_005b | ihka39_5 |
| d_005b | ihka46_2 |
| d_005b | ihka46 |
| d_005b | ihks52 |
| d_005b | ihkr46 |
| d_005b | ihkar50 |
| d_005b | ihka46_3 |
| d_005b | ihks85 |
| d_005b | ihka85 |
| d_005b | ihkar50r |
| d_can | can_pl2 |
| d_can | can_bus |
| d_can | can_60 |
| d_most | most89x |
| d_most | most_60 |
| d_most | most_65 |
|  | default |
