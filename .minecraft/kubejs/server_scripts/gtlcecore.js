ServerEvents.recipes((event) => {
  const gtr = event.recipes.gtceu

    const machine_tier = [
      ["lv" ,"tin" ,"copper"],
      ["mv" ,"copper" ,"gold"],
      ["hv" ,"gold" ,"aluminium"],
      ["ev" ,"aluminium" ,"tungsten"],
      ["iv" ,"tungsten" ,"niobium_titanium"],
      ["luv" ,"niobium_titanium" ,"vanadium_gallium"],
      ["zpm" ,"vanadium_gallium" ,"yttrium_barium_cuprate"],
      ["uv" ,"yttrium_barium_cuprate" ,"europium"],
      ["uhv" ,"europium" ,"mithril"],
      ["uev" ,"mithril" ,"neutronium"],
      ["uiv" ,"neutronium" ,"taranium"],
      ["uxv" ,"taranium" ,"crystalmatrix"],
      ["opv" ,"crystalmatrix" ,"cosmicneutronium"]
    ]
    machine_tier.forEach((tiers) =>{
      event.shaped("gtceu:" + tiers[0] + "_arc_generator", [
        "ADA",
        "BEB",
        "ACA"
    ], {
        A: "gtceu:" + tiers[1] + "_hex_wire",
        B: "gtceu:" + tiers[2] + "_single_cable",
        C: "gtceu:" + tiers[0] + "_sensor",
        D: "gtceu:" + tiers[0] + "_emitter",
        E: "gtceu:" + tiers[0] + "_machine_hull",
    })
  })


    gtr.platinum_processor("gtceu:platinum_processor_1")
      .itemInputs("288x gtceu:platinum_group_sludge_dust")
      .inputFluids("gtceu:aqua_regia 57600")
      .circuit(1)
      .EUt(GTValues.VA[GTValues.LuV])
      .duration(1200)
      .itemOutputs("16x gtceu:platinum_dust" , "16x gtceu:palladium_dust" , "15x gtceu:ruthenium_dust" , "8x gtceu:iridium_dust" , "12x gtceu:rhodium_dust" , "8x gtceu:osmium_dust")

    gtr.arc_generator("ae2:charged_certus_quartz_crystal")
      .itemInputs("gtceu:certus_quartz_gem")
      .circuit(1)
      .EUt(30)
      .duration(3*20)
      .itemOutputs("ae2:charged_certus_quartz_crystal")

    gtr.arc_generator("ae2:fluix_crystal")
      .itemInputs(
        "minecraft:redstone",
        "gtceu:certus_quartz_gem",
        "minecraft:quartz")
      .inputFluids("minecraft:water 1000")
      .EUt(30)
      .duration(4*20)
      .itemOutputs("ae2:fluix_crystal")

    gtr.arc_generator("gtceu:ender_air_1000")
      .itemInputs("64x gtceu:ender_pearl_dust")
      .inputFluids(
        "gtceu:fuming_nitric_acid 1000",
        "gtceu:nitrogen_dioxide 10000",
        "gtceu:helium 10000",
        "gtceu:radon 1000",
        "gtceu:deuterium 1000",
        "gtceu:xenon 1000")
      .circuit(24)
      .EUt(480)
      .duration(40*20)
      .outputFluids("gtceu:ender_air 1000")

    gtr.arc_generator("gtceu:nether_air_1000")
      .itemInputs("64x minecraft:gunpowder")
      .inputFluids(
        "gtceu:blaze 1000",
        "gtceu:hydrogen_sulfide 10000",
        "gtceu:sulfur_dioxide 10000",
        "gtceu:carbon_monoxide 10000",
        "gtceu:coal_gas 1000",
        "gtceu:helium 1000")
      .circuit(13)
      .EUt(120)
      .duration(20*20)
      .outputFluids("gtceu:nether_air 1000")

    gtr.arc_generator("minecraft:netherite_scrap_1x")
      .itemInputs(
        "minecraft:ancient_debris",
        "minecraft:prismarine_shard",)
      .inputFluids("gtceu:nether_air 100")
      .circuit(19)
      .EUt(480)
      .duration(12*20)
      .itemOutputs("1x minecraft:netherite_scrap")

    gtr.arc_generator("minecraft:dragon_egg_1x")
      .itemInputs(
        "minecraft:egg",
        "64x kubejs:warped_ender_pearl")
      .inputFluids(
        "gtceu:antimatter 1000",
        "gtceu:ender_eye 10000",
        "gtceu:sterilized_growth_medium 10000")
      .circuit(19)
      .EUt(491520)
      .duration(100*20)
      .chancedOutput("1x minecraft:dragon_egg",9000,0)

    gtr.arc_generator("minecraft:nether_star")
      .itemInputs(
        "4x minecraft:soul_sand",
        "3x minecraft:wither_skeleton_skull")
      .duration(100)
      .EUt(120)
      .itemOutputs("minecraft:nether_star")

    gtr.arc_generator("minecraft:skeleton_skull")
      .circuit(1)
      .itemInputs("9x minecraft:bone")
      .duration(100)
      .EUt(120)
      .itemOutputs("skeleton_skull")

    gtr.arc_generator("gtceu:nether_star_dust")
      .itemInputs(
        "#forge:dusts/diamond",
        "#forge:dusts/iridium")
      .inputFluids(
        "gtceu:rocket_fuel 1000",
        "gtceu:nether_air 8000")
      .duration(200)
      .EUt(480)
      .itemOutputs("gtceu:nether_star_dust")

    gtr.arc_generator("ad_astra:ice_shard")
      .itemInputs("minecraft:blue_ice")
      .EUt(30)
      .duration(200)
      .itemOutputs("ad_astra:ice_shard")

    gtr.arc_generator("gtceu:nitric_oxide")
      .inputFluids("gtceu:air 10000")
      .EUt(120)
      .duration(200)
      .outputFluids("gtceu:nitric_oxide 1000")

    gtr.arc_generator("gtceu:adamantine_compounds_dust_a")
      .notConsumable("kubejs:microwormhole_generator")
      .itemInputs("4x gtceu:adamantine_compounds_dust")
      .inputFluids("gtceu:mana 1000")
      .EUt(GTValues.VA[GTValues.UXV])
      .duration(20)
      .itemOutputs("gtceu:adamantine_dust")

      //铀处理
        event.remove({id:"gtceu:large_chemical_reactor/uranium_hexafluoride"})
        event.remove({id:"gtceu:chemical_reactor/uranium_hexafluoride"})
    gtr.large_chemical_reactor("gtceu:uranium_acid_process_leach")
        .itemInputs("1x gtceu:uraninite_dust" )
        .inputFluids("minecraft:water 1000" , "gtceu:sulfuric_acid 1000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20)
        .outputFluids("gtceu:uranyl_sulfate 1000")

    gtr.large_chemical_reactor("gtceu:uranium_process_alkali_leach")
        .itemInputs("1x gtceu:uraninite_dust" , "3x gtceu:soda_ash_dust")
        .inputFluids("minecraft:water 1000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20)
        .outputFluids("gtceu:uranyl_carbonate 1000")

    gtr.large_chemical_reactor("gtceu:uranium_process_enrich_1")
        .inputFluids("gtceu:nitric_acid 1000" , "gtceu:uranyl_carbonate 1000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20)
        .outputFluids("gtceu:enriched_impure_uranyl_solution 1000")
        
    gtr.large_chemical_reactor("gtceu:uranium_process_enrich_2")
        .inputFluids("gtceu:nitric_acid 1000" , "gtceu:uranyl_sulfate 1000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20)
        .outputFluids("gtceu:enriched_impure_uranyl_solution 1000")
    
    gtr.large_chemical_reactor("gtceu:uranyl_nitrate_solution_compound")
        .inputFluids("gtceu:tributyl_phosphate 1000" , "gtceu:enriched_impure_uranyl_solution 1000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20)
        .outputFluids("gtceu:uranyl_nitrate_solution_compound 1000")

    gtr.large_chemical_reactor("gtceu:ammonium_diuranate")
        .inputFluids("gtceu:uranyl_nitrate_solution_compound 1000" , "gtceu:ammonia 1000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20)
        .itemOutputs("1x gtceu:ammonium_diuranate_dust")

    gtr.large_chemical_reactor("gtceu:uranium_1")
        .itemInputs("1x gtceu:triuranium_octoxide_dust")
        .inputFluids("gtceu:hydrogen 16000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20)
        .itemOutputs("3x gtceu:uranium_dust")
        .outputFluids("minecraft:water 8000")

    gtr.dehydrator("triuranium_octoxide")
        .itemInputs("1x gtceu:ammonium_diuranate_dust")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20)
        .itemOutputs("1x gtceu:triuranium_octoxide_dust")
      
    gtr.chemical_reactor("bayerprocess_1")
      .itemInputs("1x gtceu:crushed_bauxite_ore" , "1x gtceu:sodium_hydroxide_dust")
      .inputFluids("minecraft:water 1000")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .outputFluids("gtceu:sodium_aluminum_oxide 32000")
      .itemOutputs("32x gtceu:bauxite_residue_dust")
            
    gtr.chemical_reactor("bayerprocess_2")
      .itemInputs("1x gtceu:crushed_aluminium_ore" , "1x gtceu:sodium_hydroxide_dust")
      .inputFluids("minecraft:water 1000")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .outputFluids("gtceu:sodium_aluminum_oxide 64000")
      .itemOutputs("64x gtceu:bauxite_residue_dust")

    gtr.distillery("aluminium_hydroxide_precipitation")
      .itemInputs("gtceu:aluminium_hydroxide_dust")
      .inputFluids("gtceu:sodium_aluminum_oxide 1000")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs("7x gtceu:aluminium_hydroxide_dust")

    gtr.electric_blast_furnace("alumina")
      .itemInputs("2x gtceu:aluminium_hydroxide_dust")
      .blastFurnaceTemp(1700)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs("1x gtceu:alumina_dust")

    event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_alumina" })
    event.remove({ id: "gtceu:electrolyzer/bauxite_electrolysis" })

    gtr.electrolyzer("electolyzing_alumina")
      .chancedInput("4x gtlcecore:cryolite", 100, 50)
      .itemInputs("5x gtceu:alumina_dust")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs("2x gtceu:aluminium_dust")
      .outputFluids("gtceu:oxygen 3000")

    gtr.electrolyzer("electolyzing_bauxite")
      .chancedInput("4x gtlcecore:cryolite", 1000, 100)
      .itemInputs("15x gtceu:bauxite_dust")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs("6x gtceu:aluminium_dust" , "1x gtceu:rutile_dust")
      .outputFluids("gtceu:oxygen 9000")

    gtr.chemical_reactor("fluoaluminic_acid")
      .itemInputs("1x gtceu:aluminium_hydroxide_dust")
      .inputFluids("gtceu:hydrofluoric_acid 1000")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .outputFluids("gtceu:fluoaluminic_acid 1000")

    gtr.electric_blast_furnace("cryolite")
      .inputFluids("gtceu:fluoaluminic_acid 1000")
      .itemInputs("1x gtceu:sodium_hydroxide_dust")
      .blastFurnaceTemp(1700)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs("1x gtlcecore:cryolite")

    gtr.electric_blast_furnace("bauxite_residue_dust")
      .itemInputs("1x gtceu:bauxite_residue_dust" , "1x gtceu:soda_ash_dust")
      .blastFurnaceTemp(1700)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .outputFluids("gtceu:sodium_aluminum_oxide 1000")
    
    gtr.electric_blast_furnace("sinter_1")
      .itemInputs("1x gtceu:crushed_bauxite_ore" , "1x gtceu:soda_ash_dust")
      .inputFluids("minecraft:water 1000")
      .blastFurnaceTemp(1700)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs("1x gtceu:sinter_dust")
    
    gtr.electric_blast_furnace("sinter_2")
      .itemInputs("1x gtceu:crushed_aluminium_ore" , "1x gtceu:soda_ash_dust")
      .inputFluids("minecraft:water 1000")
      .blastFurnaceTemp(1700)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs("2x gtceu:sinter_dust")

    gtr.chemical_reactor("sodium_aluminum_oxide_2")
      .itemInputs("1x gtceu:sinter_dust")
      .inputFluids("minecraft:water 1000")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs("1x kubejs:scrap")
      .outputFluids("gtceu:sodium_aluminum_oxide 16000")

    gtr.chemical_reactor("aluminium_sulfate")
      .itemInputs("2x gtceu:aluminium_dust")
      .inputFluids("gtceu:sulfuric_acid 3000")
      .circuit(24)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .outputFluids("gtceu:aluminium_sulfate 1000" , "gtceu:hydrogen 3000")
      
    gtr.chemical_reactor("aluminium_hydroxide_dust")
      .itemInputs("6x gtceu:sodium_hydroxide_dust")
      .inputFluids("gtceu:aluminium_sulfate 1000")
      .circuit(24)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs("2x gtceu:aluminium_hydroxide_dust" , "6x gtceu:sodium_sulfate_dust")
      .outputFluids("minecraft:water 1000")
    
    gtr.distillery("air_1")
      .inputFluids("gtceu:air 5000")
      .circuit(1)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(400)
      .outputFluids("gtceu:nitrogen 3500")
          
    gtr.distillery("air_2")
      .inputFluids("gtceu:air 5000")
      .circuit(2)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(400)
      .outputFluids("gtceu:oxygen 1100")
          
    gtr.distillery("air_3")
      .inputFluids("gtceu:air 5000")
      .circuit(3)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(400)
      .outputFluids("gtceu:carbon_dioxide 3500")
          
    gtr.distillery("air_4")
      .inputFluids("gtceu:air 250")
      .circuit(4)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(400)
      .outputFluids("gtceu:helium 100")
      
    gtr.distillery("air_5")
      .inputFluids("gtceu:air 5000")
      .circuit(5)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(400)
      .outputFluids("gtceu:argon 50")

    gtr.electric_blast_furnace("metallurgical_grade_silica_fume_dust")
      .itemInputs("gtceu:quartz_sand_dust" , "gtceu:quartzite_dust")
      .EUt(GTValues.VA[GTValues.MV])
      .blastFurnaceTemp(1700)
      .duration(100)
      .itemOutputs("gtceu:metallurgical_grade_silica_fume_dust")
      .outputFluids("gtceu:carbon_monoxide 1000")
    
    gtr.chemical_reactor("dilute_trichlorosilane")
      .itemInputs("gtceu:metallurgical_grade_silica_fume_dust")
      .inputFluids("gtceu:hydrochloric_acid 1000")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .outputFluids("gtceu:dilute_trichlorosilane 1000" , "gtceu:hydrogen 1000")
          
    gtr.chemical_reactor("semiconductor_polysilicon")
      .inputFluids("gtceu:trichlorosilane 1000" , "gtceu:hydrogen 1000")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs("gtlcecore:semiconductor_polycrystalline_silicon")
      .outputFluids("gtceu:hydrochloric_acid 1000")

      
    gtr.electric_blast_furnace("semiconductor_monocrystalline_silicon")
      .chancedFluidInput("gtceu:argon 1000",1000,100)
      .itemInputs("gtlcecore:semiconductor_polycrystalline_silicon")
      .EUt(GTValues.VA[GTValues.MV])
      .blastFurnaceTemp(1784)
      .duration(100)
      .itemOutputs("gtlcecore:semiconductor_single_crystal_silicon")

    gtr.cutter("cut_semiconductor_monocrystalline_silicon_water")
      .itemInputs("gtlcecore:semiconductor_single_crystal_silicon")
      .inputFluids("minecraft:water 100")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(400)
      .itemOutputs("64x gtceu:silicon_wafer" , "64x gtceu:silicon_wafer")

    gtr.cutter("cut_semiconductor_monocrystalline_silicon_distilled_water")
      .itemInputs("gtlcecore:semiconductor_single_crystal_silicon")
      .inputFluids("gtceu:distilled_water 80")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(300)
      .itemOutputs("64x gtceu:silicon_wafer" , "64x gtceu:silicon_wafer")
      
    gtr.cutter("cut_semiconductor_monocrystalline_silicon_grade_8_purified_water")
      .itemInputs("gtlcecore:semiconductor_single_crystal_silicon")
      .inputFluids("gtceu:grade_8_purified_water 60")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(200)
      .itemOutputs("64x gtceu:silicon_wafer" , "64x gtceu:silicon_wafer")
            
    gtr.cutter("cut_semiconductor_monocrystalline_silicon_grade_16_purified_water")
      .itemInputs("gtlcecore:semiconductor_single_crystal_silicon")
      .inputFluids("gtceu:grade_16_purified_water 40")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(100)
      .itemOutputs("64x gtceu:silicon_wafer" , "64x gtceu:silicon_wafer")

    gtr.cutter("cut_semiconductor_monocrystalline_silicon_lubricant")
      .itemInputs("gtlcecore:semiconductor_single_crystal_silicon")
      .inputFluids("gtceu:lubricant 20")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(250)
      .itemOutputs("64x gtceu:silicon_wafer" , "64x gtceu:silicon_wafer")
    
    gtr.distillery("trichlorosilane")
      .inputFluids("gtceu:dilute_trichlorosilane 1000")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(400)
      .outputFluids("gtceu:trichlorosilane 100")

    gtr.disassembly("kubejs:depleted_reactor_uranium_simple_to_liquid")
      .itemInputs("kubejs:depleted_reactor_uranium_simple")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20*5)
      .outputFluids("gtceu:depleted_reactor_uranium_simple_liquid 8000")

    gtr.disassembly("kubejs:depleted_reactor_uranium_simple_to_liquid_2x")
      .itemInputs("kubejs:depleted_reactor_uranium_dual")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20*5)
      .outputFluids("gtceu:depleted_reactor_uranium_simple_liquid 16000")

    gtr.disassembly("kubejs:depleted_reactor_uranium_simple_to_liquid_4x")
      .itemInputs("kubejs:depleted_reactor_uranium_quad")
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20*5)
      .outputFluids("gtceu:depleted_reactor_uranium_simple_liquid 32000")

    gtr.centrifuge("u235_gtlcecore")
      .itemInputs("gtceu:uranium_dust")
      .EUt(GTValues.VA[GTValues.HV])
      .duration(20*18)
      .itemOutputs("6x gtceu:uranium_235_dust")

    gtr.large_chemical_reactor("tbp_kerosene_extractant")
      .inputFluids("gtceu:tributyl_phosphate 6000" , "gtceu:kerosene 12000")
      .outputFluids("gtceu:tbp_kerosene_extractant 18000")
      .EUt(GTValues.VA[GTValues.HV])
      .duration(20*30)

    gtr.large_chemical_reactor("tbp_ce")
      .itemInputs("12x gtceu:carbon_dust")
      .inputFluids("gtceu:hydrogen 13500",
        "gtceu:oxygen 2000",
        "gtceu:phosphorus 1000")
      .outputFluids("gtceu:tributyl_phosphate 6000")
      .EUt(GTValues.VA[GTValues.HV])
      .duration(20*30)  

    gtr.extractor_core("organic_phase_solution_containing_tetravalent_plutonium_gtlce_core")
      .inputFluids("gtceu:depleted_reactor_uranium_simple_liquid 16000",
        "gtceu:tbp_kerosene_extractant 4000")
      .outputFluids("gtceu:organic_phase_solution_containing_tetravalent_plutonium 10000",
        "gtceu:residual_aqueous_phase_mixed_solution 6000",
        "gtceu:tbp_kerosene_extractant 3000")
      .EUt(GTValues.VA[GTValues.HV])
      .duration(20*60)

    gtr.extractor_core("purex_plutonium_containing_aqueous_solution")
        .inputFluids(
          "gtceu:residual_aqueous_phase_mixed_solution 3000",
          "gtceu:aqueous_reduction_extraction_solution 1000")
        .outputFluids(
          "gtceu:plutonium_containing_aqueous_solution 2000",
          "gtceu:uranium_containing_oil_phase_solution 1000",
          "gtceu:aqueous_reduction_extraction_solution 500")
        .duration(20*16)
        .EUt(GTValues.VA[GTValues.HV])

    gtr.extractor_core("purex_gtceu_organic_phase_solution_containing_tetravalent_plutonium")
        .inputFluids(
          "gtceu:organic_phase_solution_containing_tetravalent_plutonium 3000",
          "gtceu:nitric_acid 6000",
          "gtceu:hydrazine 4000",
          "gtceu:kerosene 5000")
        .outputFluids("gtceu:aqueous_reverse_extract 12000",
          "gtceu:uranium_containing_aqueous_solution 6000")
        .duration(60*20)
        .EUt(GTValues.VA[GTValues.HV])

    gtr.extractor_core("quaternary_plutonium_aqueous_solution_2")
        .inputFluids("gtceu:plutonium_containing_aqueous_solution 6000")
        .itemInputs("16x gtceu:sodium_nitrite_dust")
        .outputFluids(
          "gtceu:quaternary_plutonium_aqueous_solution 5000",
          "gtceu:nitric_oxide 2000",
          "minecraft:water 1000")
        .duration(30*20)
        .EUt(GTValues.VA[GTValues.HV])
    gtr.extractor_core("multivalent_plutonium_solution_3")
        .inputFluids(
          "gtceu:quaternary_plutonium_aqueous_solution 8000",
          "gtceu:organic_phase_solution_containing_tetravalent_plutonium 6000",
          "gtceu:tbp_kerosene_extractant 20000")
        .outputFluids("gtceu:multivalent_plutonium_solution 14000" , "gtceu:tbp_kerosene_extractant 15000")
        .duration(75*20)
        .EUt(GTValues.VA[GTValues.EV])

    gtr.distillation_tower("multivalent_plutonium_solution_2")
        .inputFluids("gtceu:aqueous_reverse_extract 4000")
        .outputFluids("gtceu:multivalent_plutonium_solution 3000" , "minecraft:water 1000")
        .duration(60*20)
        .EUt(GTValues.VA[GTValues.EV])

    gtr.mixer("quaternary_plutonium_aqueous_solution_1")
        .inputFluids("gtceu:organic_phase_solution_containing_tetravalent_plutonium 4000" , "gtceu:nitric_acid 2000")
        .outputFluids("gtceu:quaternary_plutonium_aqueous_solution 6000")
        .duration(60*20)
        .EUt(GTValues.VA[GTValues.EV])

    gtr.mixer("multivalent_plutonium_solution_1")
        .inputFluids("gtceu:quaternary_plutonium_aqueous_solution 6000" , "gtceu:nitric_acid 2000")
        .outputFluids("gtceu:multivalent_plutonium_solution 8000")
        .duration(60*20)
        .EUt(GTValues.VA[GTValues.EV])

    gtr.large_chemical_reactor("oxalic_acid")
        .inputFluids("gtceu:hydrogen 10000" , "gtceu:carbon_dioxide 20000")
        .outputFluids("gtceu:oxalic_acid 10000")
        .duration(15*20)
        .EUt(GTValues.VA[GTValues.MV])

    gtr.electric_blast_furnace("plutonium_dust")
        .itemInputs("1x gtceu:plutonium_dioxide_dust")
        .inputFluids("gtceu:hydrofluoric_acid 2000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20 * 30)
        .itemOutputs("16x gtceu:plutonium_dust")
        .blastFurnaceTemp(4500)

    gtr.assembler("general_nuke")
        .itemInputs("4x kubejs:reactor_mox_quad" , "5x gtceu:plutonium_block")
        .itemOutputs("1x gtlcecore:general_nuke")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20 * 30)
      
    gtr.assembler("platinum_processor")
        .itemInputs(
            "4x gtceu:electric_blast_furnace",
            "4x #gtceu:circuits/luv",
            "4x gtceu:iv_robot_arm",
            "8x gtceu:iv_fluid_regulator",
            "8x gtceu:iv_electric_pump",
            "16x gtceu:stainless_steel_frame", 
            "8x gtceu:hssg_frame", 
            "4x gtceu:chemical_plant", 
            "8x gtceu:hssg_coil_block")
        .inputFluids("gtceu:tin 4608")
        .itemOutputs("gtceu:platinum_processor")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)

      gtr.assembler("eye_of_wooden")
        .itemInputs(
            "16x gtceu:electric_blast_furnace",
            "16x minecraft:bricks",
            "16x gtceu:firebricks",
            "16x minecraft:bookshelf",
            "16x gtceu:lv_voltage_coil",
            "16x #gtceu:circuits/mv",
            "64x gtceu:lv_emitter",
            "64x gtceu:lv_sensor",
            "64x gtceu:lv_robot_arm")
        .inputFluids("gtceu:tin 4608")
        .itemOutputs("gtceu:eye_of_wooden")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(600)
        
    event.shaped("gtceu:extractor_core",[
      "XOX",
      "CAC",
      "MMM",
    ],{
      "O":"gtceu:ev_electric_pump",
      "X":"gtceu:ev_electric_motor",
      "M":"gtceu:laminated_glass",
      "A":"gtceu:ev_machine_hull",
      "C":"gtceu:ev_conveyor_module"
    })

    
  }
)
