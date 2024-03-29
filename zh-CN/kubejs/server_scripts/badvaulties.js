
BlockEvents.rightClicked('block.right_click', event => {
    //main hand only
    const { block, hand, item, world, player } = event;
    if (item.id == 'pipez:item_pipe' && block.id == 'create:item_vault') {
        let cmd = `/tell ${player.username} 请不要将Pipez连接到物品保险库，这会引起严重的游戏延迟。`
        console.log(cmd)
        event.server.runCommand(cmd)
        event.cancel()
    }
});