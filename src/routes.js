import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
//const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

// DAF
const GesFin = React.lazy(() => import('./views/daf/gesfin/GesFin'))
const Salaires = React.lazy(() => import('./views/daf/gesfin/Salaires'))

const routes = [
  { path: '/', exact: true, name: 'Accueil' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/daf', name: 'DAF', component: Typography, exact: true },
  { path: '/daf-gesfin', name: 'Gestion Financiere', component: GesFin, exact: true },
  { path: '/daf-gesfin/salaires', name: 'Salaires', component: Salaires },
  { path: '/daf-gesfin/budget', name: 'Budget', component: Typography },
  { path: '/daf-gesfin/caisse', name: 'Budget', component: Accordion },
  { path: '/daf-gesadmin', name: 'Gestion Administrative', component: Accordion, exact: true },
  { path: '/daf-gesadmin/clients', name: 'Clients', component: Typography },
  { path: '/daf-gesadmin/progformation', name: 'Prog. Formation', component: ListGroups },
  { path: '/daf-gesadmin/gesprestataire', name: 'Gest. Prestataire', component: Cards },
  { path: '/daf-gesadmin/rapportactivites', name: 'Rapport Activités', component: Collapses },
  { path: '/daf-gesmoyensgenx', name: 'Gest. Moyens GNX', component: Accordion, exact: true },
  { path: '/daf-gesmoyensgenx/logistique', name: 'Logistique', component: Typography },
  { path: '/drh-compta', name: 'Comptabilite', component: Cards, exact: true },
  { path: '/compta-accordion', name: 'Accordion', component: Accordion },
  { path: '/compta-breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/compta-cards', name: 'Cards', component: Cards },
  { path: '/compta-carousels', name: 'Carousel', component: Carousels },
  { path: '/compta-collapses', name: 'Collapse', component: Collapses },
  { path: '/compta-list-groups', name: 'List Groups', component: ListGroups },
  { path: '/compta-navs', name: 'Navs', component: Navs },
  { path: '/compta-paginations', name: 'Paginations', component: Paginations },
  { path: '/compta-placeholders', name: 'Placeholders', component: Placeholders },
  { path: '/compta-popovers', name: 'Popovers', component: Popovers },
  { path: '/compta-progress', name: 'Progress', component: Progress },
  { path: '/compta-spinners', name: 'Spinners', component: Spinners },
  { path: '/compta-tables', name: 'Tables', component: Tables },
  { path: '/compta-tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/personnel', name: 'Personnel', component: Buttons, exact: true },
  { path: '/personnel/buttons', name: 'Buttons', component: Buttons },
  { path: '/personnel/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/personnel/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/evaluation', name: 'Evaluations', component: Charts },
  { path: '/recrutement', name: 'Recrutement', component: FormControl, exact: true },
  { path: '/recrutement/form-control', name: 'Form Control', component: FormControl },
  { path: '/recrutement/select', name: 'Select', component: Select },
  { path: '/recrutement/checks-radios', name: 'Checks & Radios', component: ChecksRadios },
  { path: '/recrutement/range', name: 'Range', component: Range },
  { path: '/recrutement/input-group', name: 'Input Group', component: InputGroup },
  { path: '/recrutement/floating-labels', name: 'Floating Labels', component: FloatingLabels },
  { path: '/recrutement/layout', name: 'Layout', component: Layout },
  { path: '/recrutement/validation', name: 'Validation', component: Validation },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toasts', name: 'Toasts', component: Toasts },
  { path: '/widgets', name: 'Widgets', component: Widgets },
]

export default routes
