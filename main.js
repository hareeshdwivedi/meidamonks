
document.addEventListener('DOMContentLoaded', function () {

    setTimeout(function () {
        document.getElementById("phrase").innerHTML = "Patience, young Padawan..."
    }, 2500)

    window.addEventListener('load', function () {

        setTimeout(function () {
            document.getElementsByClassName("container")[0].style.display = "block"
            document.getElementsByClassName("loading")[0].style.display = "none"
            document.getElementsByClassName("path")[0].style.display = "flex"
        }, 4000)

        let phrases = ["WE ARE BREAKING <br> OUR VOW <br> OF SILENCE",
            "TALENT IS GIVEN <br> TRUE SKILL IS <br> EARNED",
            "BE FLEXIBLE TO <br> CHANGE AND <br> STURDY IN <br> CONVICTION",
            "USE MANY SKILLS <br> YET WORK AS ONE",
            "TO MASTER <br> ANYTHING FIND <br> INTEREST IN <br> EVERYTHING",
            "INDIVIDUALS <br> FLOURISH <br> IF CULTURE <br> AND WISDOM <br> ARE SHARED",
            "TRAIN FOR <br> PERFECTION BUT <br> AIM FOR MORE",
            "TAKE PRIDE IN YOUR <br> WORK BUT DO NOT <br> SEEK PRAISE",
            "TEMPORARY <br> SACRIFICE BRINGS <br> LASTING RESULTS",
            "BECOME A MONK <div class='openings'> Interested in joining our monastery? <br> Check out our current openings on <a href='https://www.mediamonks.com/careers' target='_blank'>mediamonks.com/careers</a>. </div>"
        ]
        let currentStep = 0
        let buttons = ["btn0", "btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"]

        let handleClick = function () {

            let btnId = event.target.id
            let btn = buttons.indexOf(btnId)

            if (btn > currentStep) {
                let increment = btn - currentStep
                currentStep = currentStep + increment
                scroll("right", increment)
            } else if (btn < currentStep) {
                let decrement = currentStep - btn
                currentStep = currentStep - decrement
                scroll("left", decrement)
            }

            changeSlide()
        }

        let changeSlide = function () {

            if (currentStep < 9 && currentStep > 0) {
                document.getElementsByClassName("prev")[0].style.display = "block"
                document.getElementsByClassName("next")[0].style.display = "block"
                document.getElementById("btn0").style.backgroundColor = "transparent"
                document.getElementById("btn9").style.backgroundColor = "transparent"
                document.getElementsByClassName("step")[0].style.display = "block"
                document.getElementsByClassName("step")[0].innerHTML = "Step " + currentStep + " out of 8 on the path to digital enlightenment."
                document.getElementsByClassName("beginning")[0].style.display = "none"
            } else if (currentStep === 0) {
                document.getElementsByClassName("step")[0].style.display = "none"
                document.getElementsByClassName("beginning")[0].style.display = "block"
                handleStart()
            } else if (currentStep === 9) {
                document.getElementsByClassName("step")[0].style.display = "none"
                document.getElementsByClassName("beginning")[0].style.display = "none"
                handleEnd()
            }

            let currentId = "phrase" + currentStep.toString()
            let div = document.getElementsByClassName("phrase")[0]
            div.id = currentId
            div.innerHTML = phrases[currentStep]

            changeButton()
        }

        let changeButton = function () {
            for (let elem of buttons) {
                if (document.getElementById(elem).style.backgroundColor === "white") {
                    document.getElementById(elem).style.backgroundColor = "transparent"
                }
            }

            let currentBtn = "btn" + currentStep.toString()
            document.getElementById(currentBtn).style.backgroundColor = "white"
        }

        let value = 0

        let scroll = function (direction, x) {
            if (direction === "right") {
                value = value - (80 * x)
                document.getElementsByClassName("wrapper")[0].style.marginLeft = value.toString() + "vw"
            } else if (direction === "left") {
                value = value + (80 * x)
                document.getElementsByClassName("wrapper")[0].style.marginLeft = value.toString() + "vw"
            }
        }

        let prevSlide = function () {
            if (currentStep !== 0) {
                prevStep = currentStep
                currentStep--
                changeSlide()
                scroll("left", 1)
            }
        }

        let nextSlide = function () {
            if (currentStep !== 9) {
                prevStep = currentStep
                currentStep++
                changeSlide()
                scroll("right", 1)
            }
        }

        let handleStart = function () {
            document.getElementById("btn0").style.backgroundColor = "white"
            document.getElementsByClassName("prev")[0].style.display = "none"
        }

        let handleEnd = function () {
            document.getElementById("btn9").style.backgroundColor = "white"
            document.getElementsByClassName("next")[0].style.display = "none"
        }

        if (currentStep < 1) {
            handleStart()
            changeSlide()
        } else if (currentStep > 8) {
            handleEnd()
            changeSlide()
        }

        document.getElementsByClassName("prev")[0].onclick = prevSlide
        document.getElementsByClassName("next")[0].onclick = nextSlide

        document.getElementsByClassName("btn")[0].onclick = handleClick
        document.getElementsByClassName("btn")[1].onclick = handleClick
        document.getElementsByClassName("btn")[2].onclick = handleClick
        document.getElementsByClassName("btn")[3].onclick = handleClick
        document.getElementsByClassName("btn")[4].onclick = handleClick
        document.getElementsByClassName("btn")[5].onclick = handleClick
        document.getElementsByClassName("btn")[6].onclick = handleClick
        document.getElementsByClassName("btn")[7].onclick = handleClick
        document.getElementsByClassName("btn")[8].onclick = handleClick
        document.getElementsByClassName("btn")[9].onclick = handleClick
    })
})

