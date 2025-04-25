/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**', // Allow all paths under this domain
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during `next build`
  },
  async redirects() {
    return [
      // Redirects originally grouped under '/(marketing/revit-mep-2025-tutorial-1-hvac-load-calculation(?:Revit)?|...)'
               {
        source: '/mar',
        destination: '/mep',
        permanent: true,
      }, {
        source: '/aboutus',
        destination: '/About-Us',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/About-Us',
        permanent: true,
      }, {
        source: '/hvac-and-indoor-air-quality',
        destination: '/indoor-air-qualitya',
        permanent: true,
      },  {
        source: '/room-heating-by-perforated-solar-air-collector',
        destination: '/energy',
        permanent: true,
      },{
        source: '/fundamentals-of-energy-engineering',
        destination: '/energy',
        permanent: true,
      }, {
        source: '/fundamentals-of-energy-engineering',
        destination: '/energy',
        permanent: true,
      }, {
        source: '/revit/revit-mep-tutorial-3',
        destination: '/revit/Autodesk-revit-mep-tutorial-3',
        permanent: true,
      }, {
        source: '/revit/revit-mep-tutorial-2',
        destination: '/revit/Autodesk-revit-mep-tutorial-2',
        permanent: true,
      }, {
        source: '/revit/revit-mep-tutorial-1',
        destination: '/revit/Autodesk-revit-mep-tutorial-1',
        permanent: true,
      }, {
        source: '/hvac-duct-accessories',
        destination: '/hvac-duct-accessories-1',
        permanent: true,
      }, {
        source: '/heat-pumps',
        destination: '/heat-pumps-1',
        permanent: true,
      },
      {
        source: '/boosting-centrifugal-chiller-efficiency-with-variable-speed-drives-vsds',
        destination: '/boosting-centrifugal-chiller-efficiency-with-variable-speed-drives',
        permanent: true,
      }, 
      {
        source: '/the-magic-of-centrifugal-chillers-unveiling-the-secrets-of-efficient-cooling',
        destination: '/magic-of-centrifugal-chillers-unveiling-the-secrets-of-efficient-cooling',
        permanent: true,
      }, 
      {
        source: '/an-introduction-to-artificial-intelligence',
        destination: '/ai',
        permanent: true,
      },
      
      {
        source: '/chilled-water-pumps',
        destination: '/chilled-water-pumps-1',
        permanent: true,
      },{
        source: '/fan-coil-units',
        destination: '/fan-coil-unit-fcu-1',
        permanent: true,
      },{
        source: '/fan-coil-units-fcus',
        destination: '/fan-coil-unit-fcu-1',
        permanent: true,
      },
      
      {
        source: '/marketing/revit-mep-2025-tutorial-1-hvac-load-calculation',
        destination: '/revit/revit-mep-tutorial-1',
        permanent: true,
      },
      {
        source: '/marketing/revit-mep-2025-tuotorial-1-hvac-load-calculationRevit',
        destination: '/revit/revit-mep-tutorial-1',
        permanent: true,
      },
      {
        source: '/revit-2025-hvac-',
        destination: '/revit/revit-mep-tutorial-1',
        permanent: true,
      },
      {
        source: '/marketing/revit-mep-2025-cooling-and-heating-load-calculation',
        destination: '/revit/revit-mep-tutorial-1',
        permanent: true,
      },
      {
        source: '/marketing/revit-mep-2025-tuotorial-1-hvac-load-calculation',
        destination: '/revit/revit-mep-tutorial-1',
        permanent: true,
      },
      {
        source: '/marketing/revit-mep-2025-cooling-and-heating-load-calculation-p-1',
        destination: '/revit/revit-mep-tutorial-1',
        permanent: true,
      },
      {
        source: '/revit-2025-hvac-load-calculation-tutorial-1',
        destination: '/revit/revit-mep-tutorial-1',
        permanent: true,
      },
      {
        source: '/revit-2025-hvac-load-',
        destination: '/revit/revit-mep-tutorial-1',
        permanent: true,
      },
      {
        source: '/how-chillers-work-',
        destination: '/revit/revit-mep-tutorial-1',
        permanent: true,
      },
      {
        source: '/Epics',
        destination: '/revit/revit-mep-tutorial-1',
        permanent: true,
      },
      {
        source: '/marketing/asif-khan',
        destination: '/revit/revit-mep-tutorial-1',
        permanent: true,
      },
      {
        source: '/marketing/marketing-and-ai',
        destination: '/revit/revit-mep-tutorial-1',
        permanent: true,
      },

      // Simple redirect (unchanged)
      {
        source: '/artificial/building-management-systems-bms',
        destination: '/building-management-systems-bms',
        permanent: true,
      },
      {
        source: '/Engineering/fundamentals-of-energy-engineering',
        destination: '/fundamentals-of-energy-engineering',
        permanent: true,
      },
      {
        source: '/marketing/image-optimization-in-next-js',
        destination: '/image-optimization-in-next-js',
        permanent: true,
      },

      // Redirects originally grouped under '/development/(next-js-a-full-stack-developer|what-is-next-js)'
      {
        source: '/development/next-js-a-full-stack-developer',
        destination: '/next-js-a-full-stack-developer',
        permanent: true,
      },
      {
        source: '/development/what-is-next-js',
        destination: '/next-js-a-full-stack-developer',
        permanent: true,
      },

      // Simple redirects (unchanged)
      {
        source: '/development/tailwind-css-revolutionize-web-development',
        destination: '/tailwind-css-revolutionize-web-development',
        permanent: true,
      },
      {
        source: '/development/supercharge-your-web-performance',
        destination: '/supercharge-your-web-performance',
        permanent: true,
      },

      // Redirects originally grouped under '/artificiali/applications-of-ai-in-healthcare|/role-of-artificial-intelligence-in-healthcare|/role-of-artificial-intelligence-1 '
      {
        source: '/artificiali/applications-of-ai-in-healthcare',
        destination: '/role-of-artificial-intelligence-in-healthcare-1',
        permanent: true,
      },
      {
        source: '/role-of-artificial-intelligence-in-healthcare',
        destination: '/role-of-artificial-intelligence-in-healthcare-1',
        permanent: true,
      },
      {
        source: '/role-of-artificial-intelligence-1',
        destination: '/role-of-artificial-intelligence-in-healthcare-1',
        permanent: true,
      },

      // Redirects originally grouped under '/(Engineering/tunnel-ventilation|Engineering/tunnels-)'
      {
        source: '/Engineering/tunnel-ventilation',
        destination: '/tunnels-ventilation',
        permanent: true,
      },
      {
        source: '/Engineering/tunnels-',
        destination: '/tunnels-ventilation',
        permanent: true,
      },

      // Redirects originally grouped under '/(Engineering/hospital-hvac-system|hospital-hvac-system|...)'
      {
        source: '/Engineering/hospital-hvac-system',
        destination: '/hospital-hvac',
        permanent: true,
      },
      {
        source: '/hospital-hvac-system',
        destination: '/hospital-hvac',
        permanent: true,
      },
      {
        source: '/Engineering/hvac-system-designing-for-hospitals',
        destination: '/hospital-hvac',
        permanent: true,
      },
      {
        source: '/Engineering/plumbing-design-for-people-with-disability',
        destination: '/hospital-hvac',
        permanent: true,
      },

      // Redirects originally grouped under '/(equipment/how-chiller-work|Engineering/chiller-system-greater-than-types-working-o-and-m|...)'
      {
        source: '/equipment/how-chiller-work',
        destination: '/how-chillers-work-operation-and-maintenance-tips',
        permanent: true,
      },
      {
        source: '/Engineering/chiller-system-greater-than-types-working-o-and-m',
        destination: '/how-chillers-work-operation-and-maintenance-tips',
        permanent: true,
      },
      {
        source: '/Engineering/concepts-of-chiller-in-hvac',
        destination: '/how-chillers-work-operation-and-maintenance-tips',
        permanent: true,
      },
      {
        source: '/Engineering/hvac-',
        destination: '/how-chillers-work-operation-and-maintenance-tips',
        permanent: true,
      },

      // Redirects originally grouped under '/artificial-intelligence|/(artificialf/ai|artificial-|...)'
      {
        source: '/artificial-intelligence',
        destination: '/ai',
        permanent: true,
      },
      {
        source: '/artificialf/ai',
        destination: '/ai',
        permanent: true,
      },
      {
        source: '/artificial-',
        destination: '/ai',
        permanent: true,
      },
      {
        source: '/artificial-intelligence-ai-in-hvac',
        destination: '/ai',
        permanent: true,
      },
      {
        source: '/artificiali/ai',
        destination: '/ai',
        permanent: true,
      },
      {
        source: '/marketing/use-of-ai-in-digital-marketing',
        destination: '/ai',
        permanent: true,
      },

      // Redirects originally grouped under '/(artificialf/building-management-systems-bms|building-management-systems-bms)'
      {
        source: '/artificialf/building-management-systems-bms',
        destination: '/ai-in-building-management-systems-bms',
        permanent: true,
      },
      {
        source: '/building-management-systems-bms',
        destination: '/ai-in-building-management-systems-bms',
        permanent: true,
      },

      // Simple redirects (unchanged or split)
      {
        source: '/Engineering/centrifugal-liquid-chiller-operation-and-maintenance',
        destination: '/centrifugal-chiller-maintenance',
        permanent: true,
      },
      {
        source: '/marketing/saifullah',
        destination: '/equipment',
        permanent: true,
      },
      {
        source: '/marketing/tailwind-css-a-game-changer-in-web-development',
        destination: '/tailwind-css-revolutionize-web-development',
        permanent: true,
      },
      {
        source: '/Engineering/energy-engineering',
        destination: '/revit-2025-hvac-load-calculation-tutorial-1',
        permanent: true,
      },

      // Redirects originally grouped under '/Engineering/role-of-ai-in-mep-industry|/the-impact-of-artificial-intelligence-on-mep-systems'
      {
        source: '/Engineering/role-of-ai-in-mep-industry',
        destination: '/impact-of-artificial-intelligence-on-mep-systems',
        permanent: true,
      },
      {
        source: '/the-impact-of-artificial-intelligence-on-mep-systems',
        destination: '/impact-of-artificial-intelligence-on-mep-systems',
        permanent: true,
      },

      // Redirects originally grouped under '/(Engineering/hvac-cooling-load-calculation|hvac-cooling-load-calculation)'
      {
        source: '/Engineering/hvac-cooling-load-calculation',
        destination: '/hvac-load-calculation',
        permanent: true,
      },
      {
        source: '/hvac-cooling-load-calculation',
        destination: '/hvac-load-calculation',
        permanent: true,
      },

      // Remaining simple redirects (unchanged or split)
      {
        source: '/Engineering/chiller-operation-and-maintenance',
        destination: '/how-chillers-work-operation-and-maintenance-tips',
        permanent: true,
      },
      {
        source: '/tunnel-ventilation',
        destination: '/tunnels-ventilation',
        permanent: true,
      },
      {
        source: '/Engineering/tunnels-ventilation',
        destination: '/tunnels-ventilation',
        permanent: true,
      },
      {
        source: '/development/tailwind-css-a-game-changer-in-web-development',
        destination: '/tailwind-css-revolutionize-web-development',
        permanent: true,
      },
      {
        source: '/marketing/building-management-systems-bms',
        destination: '/building-management-systems-bms',
        permanent: true,
      },
      {
        source: '/equipment/how-chiller-works',
        destination: '/how-chillers-work-operation-and-maintenance-tips',
        permanent: true,
      },

      // Redirects originally grouped under '/(hospital-hvac-system|hvac-system-designing-for-hospitals)'
      {
        source: '/hospital-hvac-system',
        destination: '/hospital-hvac',
        permanent: true,
      },
      {
        source: '/hvac-system-designing-for-hospitals',
        destination: '/hospital-hvac',
        permanent: true,
      },

      // Redirects originally grouped under '/(artificial/applications-of-ai-in-healthcare|...)'
      {
        source: '/artificial/applications-of-ai-in-healthcare',
        destination: '/role-of-artificial-intelligence-in-healthcare-1',
        permanent: true,
      },
      {
        source: '/marketing/use-of-ai-in-digital-marketing-details',
        destination: '/role-of-artificial-intelligence-in-healthcare-1',
        permanent: true,
      },
      {
        source: '/development/applications-of-ai-in-healthcare',
        destination: '/role-of-artificial-intelligence-in-healthcare-1',
        permanent: true,
      },
      {
        source: '/role-of-artificial-intelligence-in-healthcare',
        destination: '/role-of-artificial-intelligence-in-healthcare-1',
        permanent: true,
      },

      // Redirects originally grouped under '/high-income-skills|/high-income-skill'
      {
        source: '/high-income-skills',
        destination: '/high-income-skills-1',
        permanent: true,
      },
      {
        source: '/high-income-skill',
        destination: '/high-income-skills-1',
        permanent: true,
      },

      // Redirects originally grouped under '/(data-analyses|data-visualization|data-visualization1)'
      {
        source: '/data-analyses',
        destination: '/data-visualization-1',
        permanent: true,
      },
      {
        source: '/data-visualization',
        destination: '/data-visualization-1',
        permanent: true,
      },
      {
        source: '/data-visualization1',
        destination: '/data-visualization-1',
        permanent: true,
      },

      // Redirects originally grouped under '/(centrifugal-chillers|centrifugal-chiller1|centrifugal-chiller-2 )'
      {
        source: '/centrifugal-chillers',
        destination: '/absorption-chiller-working',
        permanent: true,
      },
      {
        source: '/centrifugal-chiller1',
        destination: '/absorption-chiller-working',
        permanent: true,
      },
      {
        source: '/centrifugal-chiller-2',
        destination: '/absorption-chiller-working',
        permanent: true,
      },

      // Simple redirects (unchanged)
      {
        source: '/revit-2025-hvac-load-calculation-report-analyses-tuotorial-2',
        destination: '/revit/revit-mep-tutorial-2',
        permanent: true,
      },

      // Redirects originally grouped under '/(fonts/CustomFont.woff2|marketing/URL%20to%20favicon)'
      {
        source: '/fonts/CustomFont.woff2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/marketing/URL%20to%20favicon',
        destination: '/',
        permanent: true,
      },

      // Redirects originally grouped under '/absorption-chiller1|/absorption-chiller'
      {
        source: '/absorption-chiller1',
        destination: '/absorption-chiller-working',
        permanent: true,
      },
      {
        source: '/absorption-chiller',
        destination: '/absorption-chiller-working',
        permanent: true,
      },

      // Remaining simple redirects (unchanged)
      {
        source: '/Engineering/room-heating-by-perforated-solar-air-collector',
        destination: '/room-heating-by-perforated-solar-air-collector',
        permanent: true,
      },
      {
        source: '/Engineering/hvac-load-calculation',
        destination: '/hvac-load-calculation',
        permanent: true,
      },

      // Redirects originally grouped under '/(generative-ai|generative-artificial-intelligence)'
      {
        source: '/generative-ai',
        destination: '/generative-artificial-intelligenc',
        permanent: true,
      },
      {
        source: '/generative-artificial-intelligence',
        destination: '/generative-artificial-intelligenc',
        permanent: true,
      },

      // Remaining simple redirects (unchanged)
      {
        source: '/artificial-intelligence-in-the-oil-and-gas-industry',
        destination: '/ai-in-the-oil-and-gas-industry',
        permanent: true,
      },
      {
        source: '/chilled-water-piping-system',
        destination: '/chilled-water-piping-systems',
        permanent: true,
      },
      {
        source: '/septic-tank',
        destination: '/what-is-septic-tank',
        permanent: true,
      },
      {
        source: '/skip-bins-and-construction-waste-management',
        destination: '/skip-bins-and-waste-management',
        permanent: true,
      },
      {
        source: '/variable-refrigerant-flow-vrf',
        destination: '/variable-refrigerant-flow-vrf-1',
        permanent: true,
      },
      {
        source: '/valves',
        destination: '/valves-and-there-types',
        permanent: true,
      },
      {
        source: '/district-cooling-system',
        destination: '/district-cooling-system-DCS',
        permanent: true,
      },
      {
        source: '/compressors',
        destination: '/compressor-1',
        permanent: true,
      },
      {
        source: '/dehumidifier',
        destination: '/dehumidifier-1',
        permanent: true,
      },
      {
        source: '/supercharge-your-web-performancer',
        destination: '/supercharge-your-web-performance-1',
        permanent: true,
      },
      {
        source: '/maximizing-centrifugal-chiller-efficiency-for-peak-performance',
        destination: '/maximizing-centrifugal-chiller-efficiency-for-peak-performance-1',
        permanent: true,
      },
      {
        source: '/what-is-next-js',
        destination: '/next-js',
        permanent: true,
      },
      {
        source: '/react-as-a-front-end-development-tool',
        destination: '/react-as-a-front-end-development',
        permanent: true,
      },
      {
        source: '/tailwind-css-revolutionize-web-development',
        destination: '/tailwind-css-revolutionize-web-dev',
        permanent: true,
      },
      {
        source: '/big-data-analysis-unlocking-the-potential-of-massive-data-sets',
        destination: '/big-data-analysis',
        permanent: true,
      },

      // Redirects originally grouped under '/(ai-in-green-building|ai-in-green-buildings)'
      {
        source: '/ai-in-green-building',
        destination: '/ai-in-green-building-1',
        permanent: true,
      },
      {
        source: '/ai-in-green-buildings',
        destination: '/ai-in-green-building-1',
        permanent: true,
      },

      // Remaining simple redirects (unchanged)
      {
        source: '/artificial-intelligence-in-hvac',
        destination: '/artificial-intelligence-in-hvac-1',
        permanent: true,
      },
      {
        source: '/how-ai-is-revolutionizing-supply-chain-efficiency',
        destination: '/how-ai-is-revolutionizing-supply-chain-efficiency-1',
        permanent: true,
      },
      {
        source: '/ai-in-building-management-systems-bms',
        destination: '/ai-in-building-management-systems-1',
        permanent: true,
      },
      {
        source: '/ducting',
        destination: '/ducting-and-types-of-hvac-ducts',
        permanent: true,
      },
      {
        source: '/geothermal-hvac',
        destination: '/geothermal-hvac-1',
        permanent: true,
      },
      {
        source: '/air-cooled-chiller',
        destination: '/air-cooled-chiller-1',
        permanent: true,
      },
      {
        source: '/hvac-filter',
        destination: '/hvac-filter-1',
        permanent: true,
      },
      {
        source: '/ai-studio-what-it-is-and-why-you-should-care',
        destination: '/ai-studio',
        permanent: true,
      },
      {
        source: '/green-buildings',
        destination: '/green-building-1',
        permanent: true,
      },
      {
        source: '/biomass-energy',
        destination: '/biomass-energy-1', // Fixed typo from /.biomass-energy-1
        permanent: true,
      },
      {
        source: '/sustainable-buildings',
        destination: '/sustainable-buildings-1',
        permanent: true,
      },
      {
        source: '/zero-energy-buildings',
        destination: '/zero-energy-building-1',
        permanent: true,
      },
      {
        source: '/methods-of-energy-audit',
        destination: '/energy-audit',
        permanent: true,
      },
      {
        source: '/machine-learning-and-data-science',
        destination: '/machine-learning',
        permanent: true,
      }, {
        source: '/how-chillers-work-operation-and-maintenance-tips',
        destination: '/chiller-and-there-o-and-m',
        permanent: true,
      },{
        source: '/cooling-tower',
        destination: '/cooling-tower-1',
        permanent: true,
      },{
        source: '/AHU',
        destination: '/air-handling-units-1',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
