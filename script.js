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

