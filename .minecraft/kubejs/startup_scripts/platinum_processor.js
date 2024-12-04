GTCEuStartupEvents.registry('gtceu:recipe_type', event =>{
    event.create('platinum_processor')
      .category('platinum_processor')
      .setEUIO('in')
      .setMaxIOSize(2, 6, 1, 0)
      .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
      .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
      .setSound(GTSoundEntries.CHEMICAL)
  })  
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("platinum_processor", "multiblock", (holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeType("platinum_processor")
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(() => Block.getBlock("gtceu:heatproof_machine_casing"))
        .pattern((definition) =>
            FactoryBlockPattern.start() 
            .aisle("AAAAAAB     BAAAAAA", "ACAACAB     BACAACA", "ACAACAB     BACAACA", "ACAACAB     BACAACA", "ACAACAB     BACAACA", "      BBBBBBB      ", "                   ", "                   ", "                   ")
            .aisle("AAAAAA       AAAAAA", "A    ADDDDDDDA    A", "ACCCCADEEEEEDACCCCA", "A    ADDDDDDDA    A", "AAAAAA       AAAAAA", "ACAACAB     BACAACA", "                   ", "                   ", "                   ")
            .aisle("AAAAAADDDDDDDAAAAAA", "FGGGGGGGGGGGGGGGGGF", "AC   ADBBBBBDA   CA", "FGGGGGGGGGGGGGGGGGF", "A    ADDDDDDDA    A", "ACAACAB     BACAACA", "                   ", "                   ", "                   ")
            .aisle("AAAAAADDDDDDDAAAAAA", "F    ADEEEEEDA    F", "AC   AD     DA   CA", "F    ADEEEEEDA    F", "A    ADDDDDDDA    A", "AAAAAAB     BAAAAAA", "                   ", "                   ", "                   ")
            .aisle("AAAAAADDDDDDDAAAAAA", "F    ADEEEEEDA    F", "AC   AD     DA   CA", "F    ADEEEEEDA    F", "A    ADDDDDDDA    A", "AAAAAAB     BAAAAAA", "                   ", "                   ", "                   ")
            .aisle("AAAAAADDDDDDDAAAAAA", "FGGGGGGGGGGGGGGGGGF", "AC   ADBBBBBDA   CA", "FGGGGGGGGGGGGGGGGGF", "A    ADDDDDDDA    A", "ACAACAB     BACAACA", "                   ", "                   ", "                   ")
            .aisle("AAAAAA       AAAAAA", "A    ADDDDDDDA GG A", "ACCCCADEEEEEDACCCCA", "A GG ADDDDDDDA    A", "AAAAAA       AAAAAA", "ACAACAB     BACAACA", "                   ", "                   ", "                   ")
            .aisle("AAAAAAB     BAAAAAA", "ACAACAB     BACGGCA", "ACAACAB     BACAACA", "ACGGCAB     BACAACA", "ACAACAB     BACAACA", "      BBBBBBB      ", "                   ", "                   ", "                   ")
            .aisle("IIIIIII   HHHHHHHH ", "JKKJKKJ   HHHHGGGH ", "JKKJKKJ   HHHHHHHH ", "JJGGJJJ            ", "JKKJKKJ            ", "JKKJKKJ            ", "                   ", "                   ", "                   ")
            .aisle("IIIIIII   HHHHHHHH ", "JKKJKKJ   FGGGG GF ", "F     F   JJJHHJJJ ", "JCBBBCJ   JJJ  JJJ ", "F     F   JJJ  JJJ ", "JKKJKKJ   JJJ  JJJ ", "          JJJ  JJJ ", "          JJJ  JJJ ", "          JJJ  JJJ ")
            .aisle("IIIIIIILLLHHHHHHHH ", "JJJJJJJAAAFG    GF ", "JCBBBCJAAAJGJHHJGJ ", "JCCCCCJLLLJ J  J J ", "JCBBBCJ   J J  J J ", "JJJJJJJ   J J  J J ", "          J J  J J ", "          J J  J J ", "          JJJ  JJJ ")
            .aisle("IIIIIIILLLHHHHHHHH ", "JKKJKKJABAF  HH  F ", "F     FABAJJJHHJJJ ", "JCBBBCJLLLJJJ  JJJ ", "F     F   JJJ  JJJ ", "JKKJKKJ   JJJ  JJJ ", "          JJJ  JJJ ", "          JJJ  JJJ ", "          JJJ  JJJ ")
            .aisle("IIIIIIILLLHHHHHHHH ", "JKKJKKJL~LHFFFFFFH ", "JKKJKKJLLLHHHHHHHH ", "JJJJJJJLLL         ", "JKKJKKJ            ", "JKKJKKJ            ", "                   ", "                   ", "                   ")
                .where("~", Predicates.controller(Predicates.blocks(definition.get())))
                .where("K", Predicates.blocks("gtceu:tempered_glass"))
                .where("G", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))
                .where("I", Predicates.blocks("gtceu:robust_machine_casing"))
                .where("D", Predicates.blocks("gtceu:inert_machine_casing"))
                .where("J", Predicates.blocks("gtceu:clean_machine_casing"))
                .where("A", Predicates.blocks("gtceu:heatproof_machine_casing"))
                .where("B", Predicates.blocks("gtceu:hssg_frame"))
                .where("H", Predicates.blocks("gtceu:solid_machine_casing"))
                .where("C", Predicates.heatingCoils())
                .where("F", Predicates.blocks("gtceu:heat_vent"))
                .where("E", Predicates.blocks("gtceu:ptfe_pipe_casing"))
                .where("L", Predicates.blocks("gtceu:heatproof_machine_casing")
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                .where(" ", Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_heatproof", "gtceu:block/multiblock/electric_blast_furnace")
})
