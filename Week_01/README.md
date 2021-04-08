# Lab Assignment #1
## Due Thursday 4/8:
1.  Create a new field using two fields in the `CA_Counties_2019.shp` data set or another data set of your choosing.

2. Create a geojson named `lab1.geojson` and add it to your lab assignments repository.

3. Create a new markdown file called `lab1.md` and explain the following:
   -  What fields you used
   -  Why you used these fields
   -  What problems could the data set have
4. Commit both `lab1.geojson` and `lab1.md` to your lab assignements repository.

1. What fields you used?
   - Used total_pop and and asian_pop, "ASIAN_POP" / "TOTAL_POP" to create a %ASIAN_POP (proportion of Asians making up the county population) field.
2. Why you used these fields?
   - I was curious to see if the Asian population in California had some geographic trends in terms of population. Filtering the map through bucketed counts of proportions show a tendency towards the Bay Area and Southern California (specifically Los Angeles and the surrounding counties.
3. What problems could the data set have?
   - From an accuracy/application point of view, I know that this data is sourced from https://data.edd.ca.gov/ and that it is from 2019, according to the naming. I might not be able to use this as a reliable indicator of information (asian population density) in 2020 and 2021. Also, I can't find any actual documentation for the data, but I think it might be because documentation is some other site as the edd cite sources its data to Esri.com, which I think is pretty unintuitive and it makes me feel less comfortable about relying on the accuracy of this data as being representative of the real world. I especially don't know how this information was collected (if it came from an opt-in census or if it was collected using residential information) either. I also don't know if the numbers cited for the different demographics are based off of a single race/ethnicity selection from a survey or if it includes biracial and mixed populations.
   - From an ethical point of view, I don't know if the people from whom this information was gathered actually consented and understood what their information was being used for, but there isn't a whole lot of identifying information in the dataset so I'm not too concerned about the possibility of a person included in the dataset being personally identified from it.
