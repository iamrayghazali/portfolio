const timeline = gsap.timeline({defaults : { duration : .25, opactiy : 0}})
    timeline
    .from("header a", { y: "-90px", stagger : .15})
    .from("header:not(:last-child)", { y: "-90px", stagger : .15})
    .from("header img", { y: "-500px", stagger : .15})
    .from("#left-container p", {x : "-600px", stagger : .15})
    .from("#right-container #ray1", {x : "1000px"})
    .from("#right-container #ray2", {x : "1000px"})
    .from("#right-container #ray3", {x : "1000px"})
    gsap.to("header", { borderBottomColor: "white", duration: 3 });

var speed = 100; // Define the typing speed

        function nameCall() {
            var i = 0;
               var txt = "I'm a software developer based in Hungary"
            function typeWriter() {
                if (i < txt.length) {
                    document.getElementById("myNameText").innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed); // Call typeWriter function recursively with a delay
                }
            }
            typeWriter(); // Initial call to start typing
        }

        function softwDev() {
            setTimeout(function() { // Anonymous function to delay execution
                var k = 0;
                var txt2 = 'software developer';
                
                function typeWriter2() {
                    if (k < txt2.length) {
                        document.getElementById("welcomeText").innerHTML += txt2.charAt(k);
                        k++;
                        setTimeout(typeWriter2, speed); // Call typeWriter2 function recursively with a delay
                    }
                }
                typeWriter2(); // Initial call to start typing "software developer"
            }, 1500); // Delay of 1500 milliseconds
        }

        window.onload = function pageLoad() {
            nameCall(); // Call nameCall function to type 'booooowie'
            softwDev(); // Call softwDev function to type 'software developer'
        }