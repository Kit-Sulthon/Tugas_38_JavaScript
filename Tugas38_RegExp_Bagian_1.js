function panggilRegexp() {
  let str =
    "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";
  let regex = /[cC]/g;
  let matches1 = str.match(regex);
  console.log(matches1);

  let regex2 = /[kK]/g;
  let matches2 = str.match(regex2);
  console.log(matches2);

  let regex3 = /[lL]/g;
  let matches3 = str.match(regex3);
  console.log(matches3);
}

panggilRegexp();
