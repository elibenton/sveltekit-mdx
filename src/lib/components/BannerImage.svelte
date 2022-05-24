<script>
  export let src
</script>

<section class="full-width">
  <img class="object-fit w-full h-full" alt="alt" {src} />
</section>

<style>
  .full-width {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    z-index: 100;
  }
</style>
