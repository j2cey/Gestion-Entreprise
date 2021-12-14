import React from 'react' // coreui-react-v4.1.0
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilBarcode,
  cilEqualizer,
  cilNotes,
  cilBriefcase,
  cilSpeedometer,
  cilStar,
  cilAddressBook,
  cilBook,
  cilCameraControl,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'DAF',
  },
  {
    component: CNavGroup,
    name: 'Gest. Financière',
    to: '/daf-gesfin',
    icon: <CIcon icon={cilEqualizer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Salaires',
        to: '/daf-gesfin/salaires',
      },
      {
        component: CNavItem,
        name: 'Budget',
        to: '/daf-gesfin/budget',
      },
      {
        component: CNavItem,
        name: 'Caisse',
        to: '/daf-gesfin/caisse',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Gest. Administrative',
    to: '/daf-gesadmin',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Clients',
        to: '/daf-gesadmin/clients',
      },
      {
        component: CNavItem,
        name: 'Prog. Formation',
        to: '/daf-gesadmin/progformation',
      },
      {
        component: CNavItem,
        name: 'Gest. Prestataire',
        to: '/daf-gesadmin/gesprestataire',
      },
      {
        component: CNavItem,
        name: 'Rapport Activités',
        to: '/daf-gesadmin/rapportactivites',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Gest. Moyens GNX',
    to: '/daf-gesmoyensgenx',
    icon: <CIcon icon={cilBarcode} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Logistique',
        to: '/daf-gesmoyensgenx/logistique',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'DRH',
  },
  {
    component: CNavGroup,
    name: 'Comptabilité',
    to: '/compta',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Prêts',
        to: '/compta/prets',
      },
      {
        component: CNavItem,
        name: 'Temps Travail',
        to: '/compta/tempstravail',
      },
      {
        component: CNavItem,
        name: 'Cards xxxx',
        to: '/compta/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel xxxx',
        to: '/compta/carousels',
      },
      {
        component: CNavItem,
        name: 'Collapse xxxx',
        to: '/compta/collapses',
      },
      {
        component: CNavItem,
        name: 'List group xxxx',
        to: '/compta/list-groups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs xxxx',
        to: '/compta/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination xxxx',
        to: '/compta/paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders xxxx',
        to: '/compta/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/compta/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress xxxx',
        to: '/compta/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners xxxx',
        to: '/compta/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables xxxx',
        to: '/compta/tables',
      },
      {
        component: CNavItem,
        name: 'Tooltips xxxx',
        to: '/compta/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Personnel',
    to: '/personnel',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Fiche Signalétique',
        to: '/personnel/fichesignaletique',
      },
      {
        component: CNavItem,
        name: 'Discipline',
        to: '/personnel/discipline',
      },
      {
        component: CNavItem,
        name: 'Congés',
        to: '/personnel/conges',
      },
      {
        component: CNavItem,
        name: 'Type Contrat',
        to: '/personnel/typecontrat',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Recrutement',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Offres, Fiche Poste',
        to: '/recrutement/offres-ficheposte',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/recrutement/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/recrutement/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/recrutement/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/recrutement/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/recrutement/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/recrutement/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/recrutement/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Evaluation',
    to: '/evaluation',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons xxxx',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications xxxx',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets xxxx',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'DT',
  },
  {
    component: CNavItem,
    name: 'QHSE',
    to: '/daf/gesadmin',
    icon: <CIcon icon={cilCameraControl} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Brigade',
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
