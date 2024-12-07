import FIrstEnergy from '../assets/images/png/first-energy.png'
import BlueNrg from '../assets/images/png/blue-nrg.png'
import DoDo from '../assets/images/png/dodo.png'
import Origin from '../assets/images/png/origin.png'
import Ovo from '../assets/images/png/ovo.png'
import Sumo from '../assets/images/png/sumo.png'
import Alg from '../assets/images/png/agl.png'
import CameronProfile from '../assets/images/png/cameron-profile.png'
import { Bundle, ComprehensiveSupport, Electricity, FiveStar, GasPlan, InternetPlan, NoService, SaveTime, Simplified } from './Icons'

export const HERDER_LIST = [
    {
        name: 'About',
        link : '#about'
    },
    {
        name: 'How It Works',
        link : '#howItWorks'
    },
    {
        name: 'Services',
        link : '#services'

    },
    {
        name: 'Testimonials',
        link : '#testimonials'
    },
    {
        name: 'Why Us',
        link : '#whyUs'
    },
    {
        name: 'FAQ',
        link : '#faq'
    },
]

export const COMPANIES_LOGO = [
        {
            Logo : FIrstEnergy
        },
        {
            Logo : BlueNrg
        },
        {
            Logo : BlueNrg
        },
        {
            Logo : BlueNrg
        },
        {
            Logo : DoDo
        },
        {
            Logo : Origin
        },
        {
            Logo : Ovo
        },
        {
            Logo : Sumo
        },
        {
            Logo : Alg
        },
]

export const COMPREHENSIVE_LIST = [
    {
        Icon : <Electricity/>,
        Heading : 'Electricity Plan Comparisons',
        Description : 'Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider.'
    },
    {
        Icon : <GasPlan/>,
        Heading : 'Gas Plan Comparisons',
        Description : 'Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider.'
    },
    {
        Icon : <InternetPlan/>,
        Heading : 'Internet Plan Comparisons',
        Description : 'Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider.'
    },
    {
        Icon : <Bundle/>,
        Heading : 'Bundle Packages',
        Description : 'Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider.'
    },
]

export const UTILITIES_LIST = [
    {
        Icon : <Simplified/>,
        Heading : 'Simplified Comparison Process',
        Description: 'Our intuitive platform lets you compare the best utility providers in one place, helping you make a quick and informed decision.'
    },
    {
        Icon : <SaveTime/>,
        Heading : 'Save Time and Money',
        Description: 'With up-to-date plans and pricing, you can be sure you’re getting the most competitive rates available.'
    },
    {
        Icon : <NoService/>,
        Heading : 'No Service Interruptions',
        Description: 'We take care of the entire switching process so you can enjoy a hassle-free experience with zero downtime.'
    },
    {
        Icon : <ComprehensiveSupport/>,
        Heading : 'Comprehensive Support',
        Description: 'Whether you need assistance selecting a plan or during the switch, our dedicated support team is here to help every step of the way.'
    },

]

export const TESTIMONIALS_LIST = [
    {
        Profile : CameronProfile,
        Name : 'Cameron',
        UserName : '@cameron',
        Rating : <FiveStar/>,
        Description : 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.'
    },
]
