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
    to: '/drh-compta',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Prêts',
        to: '/drh-compta/prets',
      },
      {
        component: CNavItem,
        name: 'Temps Travail',
        to: '/drh-compta/tempstravail',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Personnel',
    to: '/drh-personnel',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Fiche Signalétique',
        to: '/drh-personnel/fichesignaletique',
      },
      {
        component: CNavItem,
        name: 'Discipline',
        to: '/drh-personnel/discipline',
      },
      {
        component: CNavItem,
        name: 'Congés',
        to: '/drh-personnel/conges',
      },
      {
        component: CNavItem,
        name: 'Type Contrat',
        to: '/drh-personnel/typecontrat',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Recrutement',
    to: '/drh-recrutement',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Offres, Fiche Poste',
        to: '/drh-recrutement/offres-ficheposte',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Evaluation',
    to: '/drh-evaluation',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Programme Formation',
        to: '/drh-evaluation/prog-formation',
      },
      {
        component: CNavItem,
        name: 'Rapport Stage',
        to: '/drh-evaluation/rapport-stage',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'DT',
  },
  {
    component: CNavItem,
    name: 'QHSE',
    to: '/dt-qhse',
    icon: <CIcon icon={cilCameraControl} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Brigade',
    to: '/dt-brigade',
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Affectation Brigade',
        to: '/dt-brigade/affectation-brigade',
      },
      {
        component: CNavItem,
        name: 'Pointage',
        to: '/dt-brigade/pointage',
      },
    ],
  },
]

export default _nav
