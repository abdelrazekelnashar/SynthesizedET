# SynthesizedET
This product is an ensemble ET estimates from 1982 to 2019 with a 1000 m × 1000 m spatial resolution.
PML, SSEBop, MOD16A2105, and NTSG were augmented together to create the new dataset. Since SSEBop and MOD16A2105 have a 1000 m × 1000 m spatial resolution,
PML was upscaled and NTSG was downscaled by pixel average and nearest neighbor resampling techniques in Google Earth Engine (GEE), respectively.
The synthesized ET was fully contributed by SSEBop for the years 2018 and 2019 and by NTSG from 1982 to 2000, while for the years 2001 and 2002,
it was contributed by the simple mean of MOD16A2105 and NTSG. Finally, between 2003 and 2017, the value represents the simple mean of PML and SSEBop.
This ET data unit is mm/month and It should be divided by 100 before usage. NoData value was assigned to -1.
For dataset repository version: https://doi.org/10.7910/DVN/ZGOUED
For GEE application version: https://elnashar.users.earthengine.app/view/synthesizedet
