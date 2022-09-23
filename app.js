var main_div = document.getElementById('posts');

fetch("https://jsonplaceholder.typicode.com/comments")
.then(res => res.json())
.then(res => 
    {
        console.log(res);

        for(var i = 0 ; i<res.length ; i++)
        {
            var h2 = document.createElement('h2');
            var p = document.createElement('p');
            var btn = document.createElement('button');
            var div_btn = document.createElement('div');
            btn.innerHTML = "Click here for comments";

            h2.innerHTML = res[i].name;
            p.innerHTML = res[i].body;
            btn.addEventListener('click', function()
            {
                for(var j = 0 ; j<res.length ; j++)
                {
                  div_btn.innerHTML = res[j].email;
                  virtual_div.appendChild(div_btn);
                }
            })
            const virtual_div = document.createElement('div');

            virtual_div.appendChild(h2);
            virtual_div.appendChild(p);
            virtual_div.appendChild(btn);

            main_div.appendChild(virtual_div);
            virtual_div.className = "styling_class";
            h2.style.color = "black";

           
        }
    })

