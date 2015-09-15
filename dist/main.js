function builder(creep) {
    if(creep.carry.energy == 0) {
        creep.moveTo(Game.spawns.Origin);
        Game.spawns.Spawn1.transferEnergy(creep);
    } else {
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        if(targets.length) {
            creep.moveTo(targets[0]);
            creep.build(targets[0]);
    	}
	}
}
function harvester(creep) {
	if(creep.carry.energy < creep.carryCapacity) {
		var sources = creep.room.find(FIND_SOURCES);
		creep.moveTo(sources[0]);
		creep.harvest(sources[0]);
	}
	else {
		creep.moveTo(Game.spawns.Origin);
		creep.transferEnergy(Game.spawns.Origin);
	}
}

for(var name in Game.creeps){
    var creep = Game.creeps[name];
    
    switch(Memory.creeps[name].role) {
        case 'harvest':
            harvester(creep);
            break;
        case 'build':
            builder(creep);
            break;
        default:
            break;
    }
}