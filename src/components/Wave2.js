// import React from "react"
// import styled from "styled-components"
// import { motion } from "framer-motion"

// const Wave2 = () => {
//   return (
//     <div>
//       <WaveSvg
//         viewBox='0 0 780 257'
//         fill='none'
//         width='400'
//         height='90'
//         xmlns='http://www.w3.org/2000/svg'
//       >
//         <motion.path
//           initial={{ pathLength: 0, pathOffset: 1 }}
//           animate={{ pathLength: 1, pathOffset: 0 }}
//           transition={{ duration: 3 }}
//           d='M75.135 202.785C72.335 202.785 69.885 202.19 67.785 201C65.755 199.88 64.74 197.885 64.74 195.015C64.74 193.195 65.195 191.165 66.105 188.925C67.365 190.325 68.52 191.305 69.57 191.865C70.69 192.425 71.88 192.705 73.14 192.705C76.64 192.705 79.23 190.745 80.91 186.825C82.66 182.905 83.535 178.565 83.535 173.805C83.535 164.915 80.21 160.47 73.56 160.47C71.67 160.47 70.06 160.575 68.73 160.785L60.12 201H45L59.28 134.22L74.82 132.12L69.885 155.43H70.515C73.175 155.43 75.66 154.59 77.97 152.91C80.28 151.16 82.135 148.99 83.535 146.4C84.935 143.74 85.635 141.08 85.635 138.42C85.635 135.2 84.48 132.505 82.17 130.335C79.93 128.165 76.465 127.08 71.775 127.08C67.505 127.08 63.34 128.06 59.28 130.02C55.22 131.91 51.895 134.78 49.305 138.63C46.785 142.48 45.525 147.135 45.525 152.595C45.525 155.185 45.77 157.005 46.26 158.055C46.75 159.035 46.995 159.595 46.995 159.735C43.285 159.735 40.485 159 38.595 157.53C36.705 155.99 35.76 153.505 35.76 150.075C35.76 145.315 37.545 140.8 41.115 136.53C44.685 132.26 49.41 128.83 55.29 126.24C61.17 123.58 67.365 122.25 73.875 122.25C78.775 122.25 82.905 123.02 86.265 124.56C89.625 126.1 92.11 128.13 93.72 130.65C95.4 133.17 96.24 135.935 96.24 138.945C96.24 142.165 95.33 145.28 93.51 148.29C91.69 151.3 89.1 153.75 85.74 155.64C89.94 156.41 93.055 158.37 95.085 161.52C97.115 164.6 98.13 168.275 98.13 172.545C98.13 176.535 97.36 180.875 95.82 185.565C94.35 190.255 91.865 194.315 88.365 197.745C84.935 201.105 80.525 202.785 75.135 202.785ZM114.366 201.63C110.376 201.63 107.051 200.265 104.391 197.535C101.731 194.805 100.401 190.535 100.401 184.725C100.401 179.545 101.416 174.12 103.446 168.45C105.546 162.71 108.626 157.88 112.686 153.96C116.816 149.97 121.716 147.975 127.386 147.975C130.256 147.975 132.391 148.465 133.791 149.445C135.191 150.425 135.891 151.72 135.891 153.33V154.065L137.046 148.5H152.166L144.606 184.2C144.326 185.25 144.186 186.37 144.186 187.56C144.186 190.57 145.621 192.075 148.491 192.075C150.451 192.075 152.131 191.165 153.531 189.345C155.001 187.525 156.156 185.145 156.996 182.205H161.406C158.816 189.765 155.596 194.91 151.746 197.64C147.966 200.3 144.151 201.63 140.301 201.63C137.361 201.63 134.981 200.825 133.161 199.215C131.411 197.535 130.361 195.12 130.011 191.97C127.981 194.84 125.706 197.185 123.186 199.005C120.736 200.755 117.796 201.63 114.366 201.63ZM121.191 191.445C122.941 191.445 124.656 190.64 126.336 189.03C128.086 187.35 129.276 185.075 129.906 182.205L134.946 158.475C134.946 157.565 134.596 156.69 133.896 155.85C133.196 154.94 132.111 154.485 130.641 154.485C127.841 154.485 125.321 156.13 123.081 159.42C120.841 162.64 119.091 166.56 117.831 171.18C116.571 175.73 115.941 179.755 115.941 183.255C115.941 186.755 116.431 188.995 117.411 189.975C118.461 190.955 119.721 191.445 121.191 191.445ZM167.429 201.63C164.069 201.63 161.339 200.58 159.239 198.48C157.209 196.38 156.194 193.23 156.194 189.03C156.194 187.28 156.474 185.005 157.034 182.205L168.269 129.6L183.809 127.5L171.734 184.2C171.454 185.25 171.314 186.37 171.314 187.56C171.314 188.96 171.629 189.975 172.259 190.605C172.959 191.165 174.079 191.445 175.619 191.445C177.649 191.445 179.539 190.605 181.289 188.925C183.039 187.175 184.299 184.935 185.069 182.205H189.479C186.889 189.765 183.564 194.91 179.504 197.64C175.444 200.3 171.419 201.63 167.429 201.63ZM195.422 201.63C192.062 201.63 189.332 200.58 187.232 198.48C185.202 196.38 184.187 193.23 184.187 189.03C184.187 187.28 184.467 185.005 185.027 182.205L191.327 152.7H187.862L188.702 148.5H192.167L195.317 134.01L210.857 131.91L207.287 148.5H213.587L212.747 152.7H206.447L199.727 184.2C199.447 185.25 199.307 186.37 199.307 187.56C199.307 188.96 199.622 189.975 200.252 190.605C200.952 191.165 202.072 191.445 203.612 191.445C205.642 191.445 207.532 190.605 209.282 188.925C211.032 187.175 212.292 184.935 213.062 182.205H217.472C214.882 189.765 211.557 194.91 207.497 197.64C203.437 200.3 199.412 201.63 195.422 201.63ZM225.621 201.63C221.631 201.63 218.306 200.265 215.646 197.535C212.986 194.805 211.656 190.535 211.656 184.725C211.656 179.545 212.671 174.12 214.701 168.45C216.801 162.71 219.881 157.88 223.941 153.96C228.071 149.97 232.971 147.975 238.641 147.975C241.511 147.975 243.646 148.465 245.046 149.445C246.446 150.425 247.146 151.72 247.146 153.33V154.065L248.301 148.5H263.421L255.861 184.2C255.581 185.25 255.441 186.37 255.441 187.56C255.441 190.57 256.876 192.075 259.746 192.075C261.706 192.075 263.386 191.165 264.786 189.345C266.256 187.525 267.411 185.145 268.251 182.205H272.661C270.071 189.765 266.851 194.91 263.001 197.64C259.221 200.3 255.406 201.63 251.556 201.63C248.616 201.63 246.236 200.825 244.416 199.215C242.666 197.535 241.616 195.12 241.266 191.97C239.236 194.84 236.961 197.185 234.441 199.005C231.991 200.755 229.051 201.63 225.621 201.63ZM232.446 191.445C234.196 191.445 235.911 190.64 237.591 189.03C239.341 187.35 240.531 185.075 241.161 182.205L246.201 158.475C246.201 157.565 245.851 156.69 245.151 155.85C244.451 154.94 243.366 154.485 241.896 154.485C239.096 154.485 236.576 156.13 234.336 159.42C232.096 162.64 230.346 166.56 229.086 171.18C227.826 175.73 227.196 179.755 227.196 183.255C227.196 186.755 227.686 188.995 228.666 189.975C229.716 190.955 230.976 191.445 232.446 191.445ZM280.259 201.63C276.899 201.63 274.064 201 271.754 199.74C269.444 198.41 267.729 196.73 266.609 194.7C265.489 192.6 264.929 190.43 264.929 188.19C264.929 185.88 265.489 183.885 266.609 182.205C267.659 180.455 268.954 179.195 270.494 178.425C273.224 173.525 275.604 168.59 277.634 163.62C279.664 158.58 281.589 153.155 283.409 147.345L298.949 145.245C299.299 154.205 299.894 163.9 300.734 174.33C301.084 178.53 301.259 181.575 301.259 183.465C301.259 185.075 301.119 186.405 300.839 187.455C304.129 185.565 306.649 183.815 308.399 182.205H312.809C308.329 187.385 302.974 191.76 296.744 195.33C294.714 197.5 292.194 199.11 289.184 200.16C286.244 201.14 283.269 201.63 280.259 201.63ZM276.899 193.335C279.489 193.335 281.659 192.565 283.409 191.025C285.159 189.485 286.034 187 286.034 183.57C286.034 181.47 285.824 178.53 285.404 174.75C284.704 166.77 284.249 161.415 284.039 158.685C282.359 164.215 279.524 170.83 275.534 178.53C277.144 179.37 277.949 180.595 277.949 182.205C277.949 183.535 277.494 184.725 276.584 185.775C275.744 186.825 274.659 187.35 273.329 187.35C271.859 187.35 270.914 186.895 270.494 185.985C270.494 188.505 270.984 190.36 271.964 191.55C273.014 192.74 274.659 193.335 276.899 193.335ZM320.982 201.63C316.992 201.63 313.667 200.265 311.007 197.535C308.347 194.805 307.017 190.535 307.017 184.725C307.017 179.545 308.032 174.12 310.062 168.45C312.162 162.71 315.242 157.88 319.302 153.96C323.432 149.97 328.332 147.975 334.002 147.975C336.872 147.975 339.007 148.465 340.407 149.445C341.807 150.425 342.507 151.72 342.507 153.33V154.065L343.662 148.5H358.782L351.222 184.2C350.942 185.25 350.802 186.37 350.802 187.56C350.802 190.57 352.237 192.075 355.107 192.075C357.067 192.075 358.747 191.165 360.147 189.345C361.617 187.525 362.772 185.145 363.612 182.205H368.022C365.432 189.765 362.212 194.91 358.362 197.64C354.582 200.3 350.767 201.63 346.917 201.63C343.977 201.63 341.597 200.825 339.777 199.215C338.027 197.535 336.977 195.12 336.627 191.97C334.597 194.84 332.322 197.185 329.802 199.005C327.352 200.755 324.412 201.63 320.982 201.63ZM327.807 191.445C329.557 191.445 331.272 190.64 332.952 189.03C334.702 187.35 335.892 185.075 336.522 182.205L341.562 158.475C341.562 157.565 341.212 156.69 340.512 155.85C339.812 154.94 338.727 154.485 337.257 154.485C334.457 154.485 331.937 156.13 329.697 159.42C327.457 162.64 325.707 166.56 324.447 171.18C323.187 175.73 322.557 179.755 322.557 183.255C322.557 186.755 323.047 188.995 324.027 189.975C325.077 190.955 326.337 191.445 327.807 191.445ZM370.79 148.5H385.91L384.545 155.01C386.925 152.91 389.06 151.3 390.95 150.18C392.91 149.06 395.01 148.5 397.25 148.5C399.49 148.5 401.24 149.27 402.5 150.81C403.83 152.35 404.495 154.205 404.495 156.375C404.495 158.405 403.83 160.19 402.5 161.73C401.17 163.27 399.315 164.04 396.935 164.04C395.395 164.04 394.345 163.69 393.785 162.99C393.295 162.22 392.91 161.135 392.63 159.735C392.42 158.825 392.21 158.16 392 157.74C391.79 157.32 391.405 157.11 390.845 157.11C389.375 157.11 388.115 157.425 387.065 158.055C386.085 158.615 384.79 159.63 383.18 161.1L374.78 201H359.66L370.79 148.5ZM471.672 202.785C466.212 202.785 463.482 200.44 463.482 195.75C463.482 194.21 463.692 192.46 464.112 190.5C464.602 188.47 465.267 185.88 466.107 182.73C467.087 179.44 467.822 176.64 468.312 174.33C468.802 172.02 469.047 169.955 469.047 168.135C469.047 163.375 466.947 160.995 462.747 160.995C461.627 160.995 460.472 161.135 459.282 161.415L450.882 201H435.762L450.042 134.22L465.582 132.12L460.437 156.375H461.277C464.007 156.375 466.527 155.43 468.837 153.54C471.147 151.65 472.932 149.305 474.192 146.505C475.522 143.635 476.187 140.835 476.187 138.105C476.187 134.885 475.207 132.26 473.247 130.23C471.357 128.13 468.487 127.08 464.637 127.08C458.967 127.08 453.997 128.095 449.727 130.125C445.457 132.155 442.132 135.095 439.752 138.945C437.442 142.795 436.287 147.345 436.287 152.595C436.287 155.185 436.532 157.005 437.022 158.055C437.512 159.035 437.757 159.595 437.757 159.735C433.977 159.735 431.142 158.965 429.252 157.425C427.432 155.815 426.522 153.19 426.522 149.55C426.522 145.07 428.342 140.73 431.982 136.53C435.692 132.26 440.417 128.83 446.157 126.24C451.897 123.58 457.637 122.25 463.377 122.25C468.627 122.25 473.037 123.02 476.607 124.56C480.177 126.1 482.837 128.165 484.587 130.755C486.337 133.275 487.212 136.04 487.212 139.05C487.212 142.34 486.197 145.63 484.167 148.92C482.137 152.21 479.372 154.905 475.872 157.005C478.532 157.775 480.387 159.07 481.437 160.89C482.557 162.64 483.117 164.845 483.117 167.505C483.117 169.535 482.872 171.705 482.382 174.015C481.892 176.255 481.192 179.055 480.282 182.415C479.722 184.585 479.197 186.72 478.707 188.82C478.217 190.92 477.972 192.67 477.972 194.07C477.972 195.68 478.322 197.115 479.022 198.375C479.792 199.635 480.807 200.51 482.067 201C477.797 202.19 474.332 202.785 471.672 202.785ZM504.283 201.42C499.103 201.42 495.008 200.09 491.998 197.43C488.988 194.77 487.483 190.57 487.483 184.83C487.483 180.07 488.463 174.785 490.423 168.975C492.383 163.165 495.533 158.16 499.873 153.96C504.213 149.69 509.673 147.555 516.253 147.555C525.213 147.555 529.693 153.155 529.693 164.355V164.46C529.903 164.53 530.288 164.565 530.848 164.565C533.158 164.565 535.818 163.97 538.828 162.78C541.838 161.52 544.568 160.015 547.018 158.265L547.963 161.1C545.933 163.27 543.273 165.125 539.983 166.665C536.763 168.135 533.228 169.185 529.378 169.815C528.818 176.185 527.383 181.75 525.073 186.51C522.763 191.27 519.788 194.945 516.148 197.535C512.508 200.125 508.553 201.42 504.283 201.42ZM508.483 191.97C510.163 191.97 511.843 191.025 513.523 189.135C515.203 187.175 516.673 184.55 517.933 181.26C519.193 177.9 520.103 174.19 520.663 170.13C518.773 169.71 517.828 168.24 517.828 165.72C517.828 162.85 518.913 160.96 521.083 160.05C520.943 157.74 520.593 156.165 520.033 155.325C519.473 154.415 518.493 153.96 517.093 153.96C514.783 153.96 512.543 155.64 510.373 159C508.203 162.36 506.453 166.385 505.123 171.075C503.793 175.765 503.128 179.895 503.128 183.465C503.128 186.825 503.513 189.1 504.283 190.29C505.053 191.41 506.453 191.97 508.483 191.97ZM598.936 201.63C594.666 201.63 591.516 200.51 589.486 198.27C587.526 195.96 586.546 193.125 586.546 189.765C586.546 188.295 586.721 186.65 587.071 184.83C587.421 182.94 587.771 181.12 588.121 179.37C588.541 177.62 588.821 176.5 588.961 176.01C589.521 173.56 590.046 171.145 590.536 168.765C591.026 166.385 591.271 164.46 591.271 162.99C591.271 159.42 590.011 157.635 587.491 157.635C585.671 157.635 584.061 158.545 582.661 160.365C581.261 162.115 580.141 164.425 579.301 167.295L572.161 201H557.041L564.706 164.775C564.916 163.935 565.021 163.06 565.021 162.15C565.021 159.07 563.971 157.53 561.871 157.53C559.911 157.53 558.196 158.44 556.726 160.26C555.326 162.01 554.206 164.355 553.366 167.295L546.226 201H531.106L542.236 148.5H557.356L556.201 153.96C559.771 149.97 564.041 147.975 569.011 147.975C575.171 147.975 578.776 150.985 579.826 157.005C583.676 151.055 588.541 148.08 594.421 148.08C597.991 148.08 600.826 149.06 602.926 151.02C605.026 152.98 606.076 155.955 606.076 159.945C606.076 161.975 605.831 164.25 605.341 166.77C604.851 169.22 604.151 172.23 603.241 175.8C602.681 177.97 602.156 180.105 601.666 182.205C601.246 184.235 601.036 185.845 601.036 187.035C601.036 188.435 601.351 189.52 601.981 190.29C602.611 191.06 603.696 191.445 605.236 191.445C607.336 191.445 609.016 190.71 610.276 189.24C611.536 187.7 612.796 185.355 614.056 182.205H618.466C615.876 189.905 612.866 195.085 609.436 197.745C606.076 200.335 602.576 201.63 598.936 201.63ZM629.066 201.63C623.886 201.63 619.861 200.3 616.991 197.64C614.121 194.91 612.686 190.675 612.686 184.935C612.686 180.105 613.631 174.785 615.521 168.975C617.411 163.165 620.491 158.16 624.761 153.96C629.031 149.69 634.456 147.555 641.036 147.555C648.736 147.555 652.586 150.915 652.586 157.635C652.586 161.555 651.466 165.16 649.226 168.45C646.986 171.74 644.011 174.4 640.301 176.43C636.591 178.39 632.636 179.51 628.436 179.79C628.296 181.89 628.226 183.29 628.226 183.99C628.226 187.42 628.821 189.765 630.011 191.025C631.201 192.215 633.126 192.81 635.786 192.81C639.566 192.81 642.786 191.935 645.446 190.185C648.176 188.435 651.151 185.775 654.371 182.205H657.941C650.171 195.155 640.546 201.63 629.066 201.63ZM629.276 174.75C631.866 174.61 634.316 173.7 636.626 172.02C639.006 170.34 640.896 168.205 642.296 165.615C643.766 163.025 644.501 160.295 644.501 157.425C644.501 154.555 643.626 153.12 641.876 153.12C639.356 153.12 636.871 155.325 634.421 159.735C632.041 164.145 630.326 169.15 629.276 174.75ZM661.489 148.5H676.609L675.244 155.01C677.624 152.91 679.759 151.3 681.649 150.18C683.609 149.06 685.709 148.5 687.949 148.5C690.189 148.5 691.939 149.27 693.199 150.81C694.529 152.35 695.194 154.205 695.194 156.375C695.194 158.405 694.529 160.19 693.199 161.73C691.869 163.27 690.014 164.04 687.634 164.04C686.094 164.04 685.044 163.69 684.484 162.99C683.994 162.22 683.609 161.135 683.329 159.735C683.119 158.825 682.909 158.16 682.699 157.74C682.489 157.32 682.104 157.11 681.544 157.11C680.074 157.11 678.814 157.425 677.764 158.055C676.784 158.615 675.489 159.63 673.879 161.1L665.479 201H650.359L661.489 148.5ZM709.156 201.42C703.976 201.42 699.881 200.09 696.871 197.43C693.861 194.77 692.356 190.57 692.356 184.83C692.356 180 693.301 174.715 695.191 168.975C697.081 163.165 700.161 158.16 704.431 153.96C708.701 149.69 714.161 147.555 720.811 147.555C729.071 147.555 733.516 152.28 734.146 161.73C735.686 161.38 737.051 160.54 738.241 159.21C739.431 157.81 740.551 156.235 741.601 154.485H744.961C743.071 158.265 741.391 161.24 739.921 163.41C738.451 165.51 736.526 167.225 734.146 168.555C733.726 175.135 732.361 180.91 730.051 185.88C727.811 190.85 724.871 194.7 721.231 197.43C717.591 200.09 713.566 201.42 709.156 201.42ZM713.356 191.97C715.946 191.97 718.361 189.87 720.601 185.67C722.841 181.47 724.381 176.29 725.221 170.13C723.541 169.5 722.701 167.925 722.701 165.405C722.701 162.675 723.681 160.855 725.641 159.945C725.501 157.705 725.116 156.165 724.486 155.325C723.926 154.415 722.981 153.96 721.651 153.96C719.341 153.96 717.136 155.64 715.036 159C712.936 162.29 711.221 166.315 709.891 171.075C708.631 175.765 708.001 179.895 708.001 183.465C708.001 186.825 708.386 189.1 709.156 190.29C709.926 191.41 711.326 191.97 713.356 191.97Z'
//           fill='white'
//           // stroke='#D96ED4'
//           strokeWidth='15'
//           strokeOpacity='0.4'
//           stroke-linecap='round'
//           stroke-linejoin='round'
//         />
//         <motion.path
//           initial={{ pathLength: 0, pathOffset: 1 }}
//           animate={{ pathLength: 1, pathOffset: 0 }}
//           transition={{ duration: 3 }}
//           d='M67 10L5 221H768.5L730 10L669.5 110L617.5 10L557 110L499 10L429 110L388.5 10L333.5 110L282 10L226 110L169.5 10L114.5 110L67 10Z'
//           stroke='#fc8621'
//           strokeWidth='7'
//           strokeOpacity='1'
//           stroke-linecap='round'
//           stroke-linejoin='round'
//         />
//       </WaveSvg>
//     </div>
//   )
// }

// const WaveSvg = styled.svg`
//   position: absolute;
//   top: 10%;
//   left: 2.5%;
//   z-index: 1;
//   @media (max-width: 1300px) {
//     left: 30%;
//   }
//   @media (max-width: 667px) {
//     left: -10%;
//   }
// `
// export default Wave2
