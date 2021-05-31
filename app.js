const cloud1 = document.querySelector('#cloud1');
        const cloud2 = document.querySelector('#cloud2');
        const cloud3 = document.querySelector('#cloud3');
        const cloud4 = document.querySelector('#cloud4');
        const tree = document.querySelector('#tree');

        const parallax = (e) => {
            document.querySelectorAll('.moving').forEach(layer => {
                const speed = layer.getAttribute('data-speed')

                const x = (window.innerWidth - e.pageX * speed)/100
                const y = (window.innerHeight - e.pageY * speed)/100

                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
        }
        document.addEventListener("mousemove", parallax);