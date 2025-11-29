<script>
  import { Canvas } from "@threlte/core";
  import Scene from "./Scene.svelte";
</script>

<main>
  <h1>Mistery LLMs</h1>
  <div class="canvas-container">
    <Canvas>
      <Scene />
    </Canvas>
  </div>
</main>

<style>
  .canvas-container {
    height: 500px;
    width: 100%;
    background: #111;
  }
  main {
    text-align: center;
    font-family: sans-serif;
  }
</style>
