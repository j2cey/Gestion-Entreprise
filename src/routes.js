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
  { path: '/drh-compta/prets', name: 'Prêts', component: Accordion },
  { path: '/drh-compta/tempstravail', name: 'Temps Travail', component: Breadcrumbs },
  { path: '/drh-personnel', name: 'Personnel', component: Buttons, exact: true },
  { path: '/drh-personnel/fichesignaletique', name: 'Fiche Signalétique', component: Buttons },
  { path: '/drh-personnel/discipline', name: 'Discipline', component: Dropdowns },
  { path: '/drh-personnel/conges', name: 'Congés', component: ButtonGroups },
  { path: '/drh-personnel/typecontrat', name: 'Type Contrat', component: Accordion },
  { path: '/evaluation', name: 'Evaluations', component: Charts },
  { path: '/drh-recrutement', name: 'Recrutement', component: FormControl, exact: true },
  {
    path: '/drh-recrutement/offres-ficheposte',
    name: 'Offres, Fiche Poste',
    component: FormControl,
  },
  { path: '/drh-evaluation', name: 'Evaluation', component: CoreUIIcons, exact: true },
  {
    path: '/drh-evaluation/prog-formation',
    name: 'Programme Formation',
    component: CoreUIIcons,
  },
  { path: '/drh-evaluation/rapport-stage', name: 'Rapport Stage', component: Flags },
  { path: '/dt-qhse', name: 'Notifications', component: Alerts, exact: true },
  { path: '/dt-brigade', name: 'Brigade', component: Alerts, exact: true },
  { path: '/dt-brigade/affectation-brigade', name: 'Affectation', component: Alerts },
  { path: '/dt-brigade/pointage', name: 'Pointage', component: Widgets },
]

export default routes
