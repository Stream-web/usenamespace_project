<template>
  <div>
    <header
      :class="[
        ns.b(),
        // 'fixed-header' : fixed
        // ns.m(_type),
        // ns.m(_size),
        // ns.is('disabled', _disabled),
        // ns.is('loading', loading),
        // ns.is('plain', plain),
        // ns.is('round', round),
        // ns.is('circle', circle),
        // ns.is('text', text),
        // ns.is('link', link),
        // ns.is('has-bg', bg)
      ]"
    >
      <!-- :class="[
        'fixed-header': fixed
          ns.b(),
      ]}" -->
      <!-- class="navigation-navbar-header-container" -->
      <div class="navbar-header-box">
        <slot></slot>
        <div style="flex: 1;"></div>
        <NavigationSideAction />
        <NavigationAvatar />
        <Translations dark />
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import Translations from '@/locales/Translations.vue'
import NavigationSideAction from '@/components/Navigation/Side/SideAction.vue'
import NavigationAvatar from '@/components/Navigation/Avatar.vue'
import '@/styles/NavBar.scss'

export default defineComponent({
  name: 'NavigationNavBar',
  components: {
    Translations,
    NavigationSideAction,
    NavigationAvatar
  },
  props: {
    fixed: {
      type: Boolean,
      default: true
    }
  },
  setup () {
    const ns = useNamespace('navigation')
    return {
      ns
    }
  }
})
</script>
<style lang="scss" scoped>
$headerHeight: 48px;

.navigation-navbar-header-container {
  height: $headerHeight;
  line-height: $headerHeight;

  &.fixed-header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
  }

  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

  .navbar-header-box {
    display: flex;
    height: 100%;
    padding: 0 16px;
    background-color: #fff;
  }
}
</style>
