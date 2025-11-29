<script>
  import { T } from "@threlte/core";
  import { OrbitControls } from "@threlte/extras";
</script>

<T.PerspectiveCamera makeDefault position={[10, 0, 10]} fov={50}>
  <OrbitControls />
</T.PerspectiveCamera>

<T.DirectionalLight position={[3, 10, 7]} />
<T.AmbientLight intensity={0.2} />

<T.Mesh position.y={1}>
  <T.SphereGeometry args={[2, 10, 5]} />
  <T.MeshStandardMaterial color="blue" />
</T.Mesh>

<T.GridHelper args={[10, 10]} />
