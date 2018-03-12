<template>

    <div class="align-self-center col-sm-10 col-md-8 col-lg-6 col-xl-6" id="fontana-regional-library">

        <main-menu></main-menu>

        <router-view></router-view>

    </div>

</template>

<script>
    import menu from './components/features/menu';

    export default {
      name: 'fontana',
      components: {
        'main-menu': menu,
      },
    };
</script>

<style>
    /**
     * @todo Abstract to custom css.
     */
    @import '~bootstrap/dist/css/bootstrap.min.css';

    body {
        background-color: #f5f5f5 !important;
    }

</style>