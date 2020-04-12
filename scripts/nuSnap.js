

Hooks.on("init", function() {
  console.log("This code runs once the Foundry VTT software begins it's initialization workflow.");
  old_draw = Actor.draw;
  async function new_draw() {
    console.log("HENLO");
    return await old_draw;
  }
  Actor.draw = new_draw;
});

Hooks.on("ready", function() {
  console.log("This code runs once core initialization is ready and game data is available.");
});