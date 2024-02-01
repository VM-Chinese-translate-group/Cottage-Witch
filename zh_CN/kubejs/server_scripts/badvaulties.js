BlockEvents.rightClicked('create:item_vault', e => {
    if(e.item.id == 'pipez:item_pipe')
    e.cancel()
    e.server.runCommandSilent(`tell @p 请不要将Pipez连接到物品保险库，这会引起严重的游戏延迟。`)
})

