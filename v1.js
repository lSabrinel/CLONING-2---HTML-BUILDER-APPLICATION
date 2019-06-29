function addT() {
    // document.getElementById('main').innerHTML='&lt;h1&gt; Titre &lt;/h1&gt;';
    $("#main").append('&lt;h1&gt; Dark &lt;/h1&gt; <br><br> ');
    $("#aside-2").append(' <h1> Dark </h1>');
}

function addP() {
    $("#main").append('&lt;p&gt; Dark is the best series on netflix &lt;/p&gt; <br><br> ');
    $("#aside-2").append(' <p> Dark is the best series on netflix </p>');
}

function addOl() {
    $("#main").append('&lt;ol&gt; <br> &lt;li&gt; saison1 &lt;/li&gt; <br> &lt;li&gt; saison2 &lt;/li&gt; <br> &lt;li&gt; saison3 &lt;/li&gt; <br> &lt;/ol&gt;<br><br>');
    $("#aside-2").append(' <ol> <li> saison1 </li> <li> saison2 </li> <li> saison3 </li> </ol>');
}

function addUl() {
    $("#main").append('&lt;ul&gt; <br> &lt;li&gt; saison1 &lt;/li&gt; <br> &lt;li&gt; saison2 &lt;/li&gt; <br> &lt;li&gt; saison3 &lt;/li&gt; <br> &lt;/ul&gt;<br><br>');
    $("#aside-2").append(' <ul> <li> saison1 </li> <li> saison2 </li> <li> saison3 </li> </ul> ');
}

function addImg() {
    $("#main").append(' &lt;img src="darksaison2.jpeg"&gt;<br><br> ');
    $("#aside-2").append(' <img src="darksaison2.jpeg" width="500" height="250"> ');

}

function addVid() {
    $("#main").append(' &lt;video src="Dark-Season-2-Trilogy-Trailer-Netflix.mp4" controls&gt;<br><br> ');
    $("#aside-2").append(' <video src="Dark-Season-2-Trilogy-Trailer-Netflix.mp4" width="500" height="250" controls> ');
}

function addAud() {
    $("#main").append(' &lt;audio src="Familiar.mp3" controls&gt; <br><br>');
    $("#aside-2").append(' <audio src="Familiar.mp3" width="500" controls> ');

}

function addLn() {
    $("#main").append(' <p> &lt;a href="https://www.netflix.com/tn-fr/"s&gt; Netflix &lt;/as&gt; </p> <br><br>');
    $("#aside-2").append('<br> <a href="https://www.netflix.com/tn-fr/"> Netflix </a> <br>');
}

// function changeP() {
//     // alert('clicked')
//     let a = prompt('write here');
//     // $('#te')
//     if (a !== null) {
//         document.getElementById('te').innerHTML = a;
//         document.getElementById('te2').innerHTML = a;

//     }

// }

function changeP() {
    // alert('clicked')
    let a = prompt('write here');
    // $('#te')
    if (a !== null) {
        document.getElementById('Pl').innerHTML = a;
        document.getElementById('Pr').innerHTML = a;

    }
}