import { motion } from 'framer-motion'

type Loader = {
    progress: number
}

const ParticleLoader = ({progress}: Loader) => {
    return (
        <motion.svg 
            animate={{
                rotate: 720
            }}
            transition={{duration: 2, repeat: Infinity}}
            
            width="443" 
            height="588" 
            viewBox="0 0 443 588" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{scale: .5, marginBottom: 0, overflow: 'hidden'}}
        >
            <circle cx="219" cy="278" r="109.5" stroke="#E5E7E6"/>
            <circle cx="220" cy="279" r="174.5" stroke="#E5E7E6"/>
            <g filter="url(#filter0_d_0_1)">
            <circle cx="218.5" cy="279.5" r="37" stroke="#E5E7E6" strokeDasharray="1 1" shapeRendering="crispEdges"/>
            </g>
            <g filter="url(#filter1_d_0_1)">
            <circle cx="219" cy="278" r="64.5" stroke="#E5E7E6" strokeDasharray="1 1" shapeRendering="crispEdges"/>
            </g>
            <g filter="url(#filter2_d_0_1)">
            <circle cx="219" cy="279" r="24.5" stroke="#E5E7E6" strokeDasharray="1 1" shapeRendering="crispEdges"/>
            </g>
            <line x1="219.413" y1="278.718" x2="430.413" y2="587.718" stroke="#DB2B39"/>
            <line x1="218.855" y1="278.522" x2="442.855" y2="210.522" stroke="#DB2B39"/>
            <line x1="219.961" y1="278.499" x2="0.961299" y2="261.499" stroke="#DB2B39"/>
            <line x1="219.876" y1="278.484" x2="78.8763" y2="242.484" stroke="#DB2B39"/>
            <line x1="219.876" y1="278.484" x2="78.8763" y2="242.484" stroke="#DB2B39"/>
            <line x1="219.524" y1="277.847" x2="308.524" y2="0.847059" stroke="#DB2B39"/>
            <path d="M218.5 278.5C126.1 196.1 148 152.5 170.5 141" stroke="#1789FC"/>
            <path d="M219 278C244.945 331.935 238.796 360.473 232.478 368" stroke="#1789FC"/>
            <path d="M220 278C269.159 256.426 257.508 245.011 245.537 242" stroke="#1789FC"/>
            <path d="M220 278C176 320 158.333 373.5 155 395" stroke="#1789FC"/>
            <path d="M220 278C162.462 273.692 139.359 268.205 135 266" stroke="#1789FC"/>
            <rect x="375.293" y="126.564" width="9" height="39" transform="rotate(45 375.293 126.564)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="53.605" y="210.455" width="6.57716" height="21.1213" transform="rotate(114.6 53.605 210.455)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="41.7746" y="272.035" width="6.57716" height="21.1213" transform="rotate(92.8041 41.7746 272.035)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="57.6316" y="202.827" width="6.56817" height="11.2271" transform="rotate(117.887 57.6316 202.827)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="76.6831" y="171.84" width="6.56817" height="11.2271" transform="rotate(123.199 76.6831 171.84)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="114.488" y="134.575" width="5.48554" height="2.3799" transform="rotate(141.927 114.488 134.575)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="353.85" y="135.568" width="5.87006" height="17.5858" transform="rotate(43 353.85 135.568)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="209.674" y="72.8947" width="7.8594" height="27.3308" transform="rotate(-2.71042 209.674 72.8947)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="220.595" y="90.5051" width="4.68792" height="8.84694" transform="rotate(0.583239 220.595 90.5051)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="198.553" y="95.0608" width="4.49917" height="6.18967" transform="rotate(-6.47771 198.553 95.0608)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="191.574" y="90.3224" width="5.06226" height="12.0896" transform="rotate(-8.56068 191.574 90.3224)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="203.537" y="82.9936" width="5.87006" height="17.5858" transform="rotate(-4.45737 203.537 82.9936)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="356.159" y="161.569" width="4.74707" height="0.805819" transform="rotate(47 356.159 161.569)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211" strokeWidth="0.805819"/>
            <rect x="360.951" y="165.705" width="4.55635" height="1.65092" transform="rotate(49 360.951 165.705)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="297.968" y="107.67" width="4.55635" height="9.7055" transform="rotate(26.2859 297.968 107.67)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="315.962" y="126.131" width="6.35057" height="2.18282" transform="rotate(33.6524 315.962 126.131)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="381.402" y="192.679" width="7.51842" height="4.24972" transform="rotate(61.1686 381.402 192.679)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="407.204" y="224.287" width="7.68858" height="16.6314" transform="rotate(73.5662 407.204 224.287)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="404.791" y="342.873" width="8.6749" height="16.0114" transform="rotate(111.37 404.791 342.873)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="396.352" y="351.283" width="8.19993" height="11.5076" transform="rotate(111.37 396.352 351.283)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="406.422" y="367.199" width="8.56611" height="26.5601" transform="rotate(114.969 406.422 367.199)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="336.322" y="485.8" width="9.60518" height="57.1016" transform="rotate(151.414 336.322 485.8)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="318.957" y="480.115" width="10.0448" height="44.0459" transform="rotate(152.636 318.957 480.115)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="296.597" y="464.777" width="7.97759" height="20.0476" transform="rotate(154.89 296.597 464.777)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="288.169" y="472.335" width="9.01136" height="23.476" transform="rotate(157.48 288.169 472.335)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="260.905" y="458" width="7.53908" height="4.50513" transform="rotate(167.99 260.905 458)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="77.485" y="395.39" width="7.53908" height="4.50513" transform="rotate(-129.361 77.485 395.39)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="101.93" y="425.296" width="7.52614" height="9.84037" transform="rotate(-140.654 101.93 425.296)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="239.474" y="467.527" width="6.07475" height="10.3307" transform="rotate(176.994 239.474 467.527)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="0.0878384" y="-0.70163" width="8.13482" height="42.2386" transform="matrix(0.789468 -0.613791 -0.613791 -0.789468 352.916 456.541)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="0.0739128" y="-0.703233" width="6.56447" height="11.805" transform="matrix(0.777146 -0.62932 -0.62932 -0.777146 342.632 426.509)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <rect x="0.0616284" y="-0.704416" width="5.83605" height="30.4187" transform="matrix(0.766044 -0.642788 -0.642788 -0.766044 361.382 435.527)" fill="#E8D211" fillOpacity="0.6" stroke="#E8D211"/>
            <path d="M219 279C320.6 280.571 366 315.655 376 333" stroke="#1789FC"/>
            <path d="M219 278.655C241.829 308.625 271.846 250.706 284 218" stroke="#1789FC"/>
            <path d="M219 278.5C298.6 350.9 323.833 362 326.5 358.5" stroke="#1789FC"/>
            <path d="M219 278.5C266.6 386.5 290.167 418.833 296 421.5" stroke="#1789FC"/>
            <path d="M219 278.5C221.8 317.7 209.833 327.833 203.5 328" stroke="#1789FC"/>
            <path d="M219.5 278.5C284.3 314.5 311.5 285.5 317 266.5" stroke="#1789FC"/>
            <path d="M219.5 278.5C184.3 293.3 173.167 290.667 172 287.5" stroke="#1789FC"/>
            <path d="M219.5 279C129.9 320.6 89.5 329 80.5 328" stroke="#1789FC"/>
            <path d="M219 278C219 173.2 205 157 198 162" stroke="#1789FC"/>
            <path d="M219.5 279.5C270.3 175.1 326 161.667 347.5 168" stroke="#1789FC"/>
            <path d="M219.5 279C241.9 387.4 337.167 306.167 382 252" stroke="#1789FC"/>
            <path d="M220 279C320.4 217 357.833 214.5 364 221" stroke="#1789FC"/>
            <path d="M220.5 279.5C109.7 214.7 81 214.5 80.5 222.5" stroke="#1789FC"/>
            <defs>
            <filter id="filter0_d_0_1" x="177" y="242" width="83" height="83" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
            </filter>
            <filter id="filter1_d_0_1" x="150" y="213" width="138" height="138" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
            </filter>
            <filter id="filter2_d_0_1" x="190" y="254" width="58" height="58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
            </filter>
            </defs>
        </motion.svg>
    )
}

export default ParticleLoader