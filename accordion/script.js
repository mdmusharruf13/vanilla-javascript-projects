const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    const btn = question.querySelector(".btn");
    const answer = question.querySelector(".answer");

    btn.addEventListener("click", () => {
        const isAnswerHidden = answer.classList.contains("display-none");

        questions.forEach(item => {
            const itemBtn = item.querySelector(".btn");
            const itemAnswer = item.querySelector(".answer");
            itemAnswer.classList.add("display-none");
            itemBtn.classList.remove("btn-rotate");
        });

        if (isAnswerHidden) {
            answer.classList.remove("display-none");
            btn.classList.add("btn-rotate");
        }
        else {
            answer.classList.add("display-none");
            btn.classList.remove("btn-rotate");
        }
    })

    // btn.addEventListener("click", () => {
    //     questions.forEach((item) => {
    //         if (item !== question) {
    //             const currAnswer = item.querySelector(".answer");
    //             if (!currAnswer.classList.contains("display-none")) {
    //                 currAnswer.classList.add("display-none");
    //                 btn.classList.remove("btn-rotate");
    //             }
    //         }
    //     })
    //     answer.classList.toggle("display-none");
    //     btn.classList.toggle("btn-rotate");
    // });


})


