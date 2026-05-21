document.addEventListener('click', function (e) {
  let body = document.body;
  let x = e.pageX;
  let y = e.pageY;

  let colors = ['#ff0000', '#ff9900', '#ffff00', '#00ff00', '#00ccff', '#cc00ff'];

  for (let i = 0; i < 20; i++) {
    let firework = document.createElement('div');

    firework.style.position = 'absolute';
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    firework.style.width = '6px';
    firework.style.height = '6px';
    firework.style.borderRadius = '50%';
    firework.style.background = colors[Math.floor(Math.random() * colors.length)];
    firework.style.pointerEvents = 'none';
    firework.style.zIndex = '9999';

    let angle = Math.random() * 2 * Math.PI;
    let distance = Math.random() * 80;

    body.appendChild(firework);

    let animation = firework.animate([
      {
        transform: 'translate(0,0)',
        opacity: 1
      },
      {
        transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
        opacity: 0
      }
    ], {
      duration: 800,
      easing: 'ease-out'
    });

    animation.onfinish = () => firework.remove();
  }
});