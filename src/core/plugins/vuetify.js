import Vue from 'vue';
import vuetifyTheme from '@myetherwallet/mew-components/src/assets/styles/vuetifyTheme.js';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

import Vuetify, {
  VAlert,
  VApp,
  VBtn,
  VBadge,
  VBtnToggle,
  VCard,
  VCardTitle,
  VCardSubtitle,
  VCardText,
  VCardActions,
  VCol,
  VContainer,
  VContent,
  VDialog,
  VDivider,
  VForm,
  VIcon,
  VImg,
  VInput,
  VList,
  VListItem,
  VListItemAvatar,
  VListItemContent,
  VListItemIcon,
  VListItemTitle,
  VNavigationDrawer,
  VRow,
  VSheet,
  VBottomSheet,
  VToolbar,
  VTextField,
  VTextarea,
  VLayout,
  VSelect,
  VCombobox,
  VTooltip,
  VStepper,
  VStepperHeader,
  VStepperStep,
  VStepperItems,
  VStepperContent,
  VExpandTransition,
  VExpansionPanels,
  VExpansionPanel,
  VExpansionPanelContent,
  VExpansionPanelHeader,
  VSwitch,
  VCheckbox,
  VTab,
  VTabs,
  VTabsItems,
  VTabItem,
  VTabsSlider,
  VMenu,
  VDatePicker,
  VTimePicker,
  VMain,
  VSpacer,
  VSlider,
  VDataTable,
  VCarousel,
  VSlideYTransition,
  VSlideXReverseTransition,
  VSlideXTransition,
  VCarouselItem,
  VListGroup,
  VListItemGroup,
  VOverlay,
  VThemeProvider,
  VRadio,
  VRadioGroup,
  VProgressLinear,
  VProgressCircular,
  VFileInput,
  VSimpleCheckbox,
  VPagination,
  VFooter,
  VAppBar,
  VItem,
  VItemGroup,
  VScrollYTransition,
  VSkeletonLoader,
  VChip,
  VChipGroup,
  VSystemBar,
  VSnackbar
} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VAlert,
    VApp,
    VBtn,
    VBadge,
    VBtnToggle,
    VCard,
    VCardTitle,
    VCardSubtitle,
    VCardText,
    VCardActions,
    VCol,
    VContainer,
    VContent,
    VDialog,
    VDivider,
    VForm,
    VIcon,
    VImg,
    VInput,
    VList,
    VListItem,
    VListItemAvatar,
    VListItemContent,
    VListItemIcon,
    VListItemTitle,
    VNavigationDrawer,
    VRow,
    VSheet,
    VBottomSheet,
    VToolbar,
    VTextField,
    VTextarea,
    VLayout,
    VSelect,
    VCombobox,
    VTooltip,
    VStepper,
    VStepperHeader,
    VStepperStep,
    VStepperItems,
    VStepperContent,
    VExpandTransition,
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelContent,
    VExpansionPanelHeader,
    VSwitch,
    VCheckbox,
    VTab,
    VTabs,
    VTabsItems,
    VTabItem,
    VTabsSlider,
    VMenu,
    VDatePicker,
    VTimePicker,
    VMain,
    VSpacer,
    VSlider,
    VDataTable,
    VCarousel,
    VSlideYTransition,
    VSlideXReverseTransition,
    VSlideXTransition,
    VCarouselItem,
    VListGroup,
    VListItemGroup,
    VOverlay,
    VThemeProvider,
    VRadio,
    VRadioGroup,
    VProgressLinear,
    VProgressCircular,
    VFileInput,
    VSimpleCheckbox,
    VPagination,
    VFooter,
    VAppBar,
    VItem,
    VItemGroup,
    VScrollYTransition,
    VSkeletonLoader,
    VChip,
    VChipGroup,
    VSystemBar,
    VSnackbar
  }
});

export default new Vuetify(vuetifyTheme);
