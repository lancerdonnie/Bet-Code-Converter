const ele = document.querySelector('#form');
let from = document.querySelector('#from').value;
let to = document.querySelector('#to').value;
let code = document.querySelector('#inp').value;
let ans = '';
document.querySelector('#to').addEventListener('change', e => {
  to = e.target.value;
});
document.querySelector('#from').addEventListener('change', e => {
  from = e.target.value;
});
document.querySelector('#inp').addEventListener('change', e => {
  code = e.target.value;
});
if (ele.addEventListener) {
  ele.addEventListener(
    'submit',
    e => {
      e.preventDefault();
      document.querySelector('#ans').style.display = 'none';
      (async () => {
        try {
          let from = document.querySelector('#from').value;
          let to = document.querySelector('#to').value;
          let code = document.querySelector('#inp').value;
          console.log(from, to, code);
          if (from == 'bet9ja' && to == 'betking' && code) {
            raw = await fetch(
              `https://us-central1-my-project-1565169782214.cloudfunctions.net/test-function/api?code=${code}`
            );
            ans = await raw.text();
            raw2 = await fetch(
              `https://us-central1-my-project-1565169782214.cloudfunctions.net/betking/api?names=${ans}`
            );
            ans2 = await raw2.text();
            document.querySelector('#ans').innerText = ans2;
            document.querySelector('#ans').style.display = 'block';
          } else if (from == 'betking' && to == 'bet9ja' && code) {
            raw = await fetch(
              `https://us-central1-my-project-1565169782214.cloudfunctions.net/betkingbook/api?code=${code}`
            );
            ans = await raw.text();
            raw2 = await fetch(
              `https://us-central1-my-project-1565169782214.cloudfunctions.net/bet9ja/api?names=${ans}`
            );
            ans2 = await raw2.text();
            document.querySelector('#ans').innerText = ans2;
            document.querySelector('#ans').style.display = 'block';
          } else {
            document.querySelector('#ans').innerText =
              'You have done something wrong';
            document.querySelector('#ans').style.display = 'block';
          }
        } catch (error) {
          console.log(error);
          document.querySelector('#ans').innerText =
            'We are sorry. Something went wrong';
          document.querySelector('#ans').style.display = 'block';
        }
      })();
    },
    false
  );
}
