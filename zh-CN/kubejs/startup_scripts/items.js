StartupEvents.registry('item', event => {
event.create('lunar_coin').maxStackSize(64).displayName("月亮币")
event.create('solar_coin').maxStackSize(64).displayName("太阳币")
event.create('arcane_coin').maxStackSize(64).displayName("奥术币")
event.create('lunarcoin').texture('kubejs:item/lunar_coin').maxStackSize(64).displayName("月亮币")
event.create('solarcoin').texture('kubejs:item/solar_coin').maxStackSize(64).displayName("太阳币")
event.create('arcanecoin').texture('kubejs:item/arcane_coin').maxStackSize(64).displayName("奥术币")
event.create('ticket')
})

StartupEvents.registry('block', event => {

  //Emmu Blocks
  event.create('bat_wallpaper', 'cardinal')
  .model('kubejs:block/bat_wallpaper')
  .soundType('wood')
  .hardness(2)
  .displayName('蝙蝠壁纸') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('skull_wallpaper', 'cardinal')
  .model('kubejs:block/skull_wallpaper')
  .soundType('wood')
  .hardness(2)
  .displayName('骷髅壁纸') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('witch_cat_plushie', 'cardinal')
  .model('kubejs:block/witch_cat_plushie')
  .soundType('wool')
  .fullBlock(false)
  .defaultCutout()
  .hardness(1.5)
  .displayName('毛绒玩具-女巫猫')  
})