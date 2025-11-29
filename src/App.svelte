<script>
  import { Canvas } from "@threlte/core";
  import Scene from "./Scene.svelte";
  import { model } from "./firebase";
  import { onMount } from "svelte";

  let result = $state("");

  async function testGemini() {
    try {
      result = "Loading...";
      const prompt = "Explain how AI works to a 5 year old.";
      const resultGen = await model.generateContent(prompt);
      const response = await resultGen.response;
      result = response.text();
    } catch (e) {
      result = "Error: " + e.message;
      console.error(e);
    }
  }

  function onSubmit(token) {
    console.log("reCAPTCHA token:", token);
    alert("reCAPTCHA verified!");
  }

  onMount(() => {
    window.onSubmit = onSubmit;
  });
</script>

<main>
  <h1>Mistery LLMs</h1>
  <button onclick={testGemini}>Test Gemini</button>

  <button
    class="g-recaptcha"
    data-sitekey="6LcTEhwsAAAAAGa7_We74sqSyUVnH9W5Np_eAcY-"
    data-callback="onSubmit"
    data-action="submit">Submit with reCAPTCHA</button
  >

  <p>{result}</p>
  <div class="canvas-container">
    <Canvas>
      <Scene />
    </Canvas>
  </div>
</main>

<style>
</style>
