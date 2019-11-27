let teams = {
  jseifken: {
    wins: 9,
    points: 1567
  },
  garnett: {
    wins: 8,
    points: 1482
  },
  schulz: {
    wins: 8,
    points: 1324
  },
  marchand: {
    wins: 7,
    points: 1433
  },
  gintof: {
    wins: 7,
    points: 1383
  },
  eaton: {
    wins: 7,
    points: 1310
  },
  avior: {
    wins: 7,
    points: 1256
  },
  ignas: {
    wins: 6,
    points: 1400
  },
  seifken: {
    wins: 6,
    points: 1264
  },
  lavertu: {
    wins: 4,
    points: 1163
  },
  quinn: {
    wins: 2,
    points: 1135
  },
  forcier: {
    wins: 1,
    points: 1091
  }
};

let outcomes = () => {
  let newArr = [];
  let subArr = [];
  for (let a = 0; a <= 1; a++) {
    for (let b = 0; b <= 1; b++) {
      for (let c = 0; c <= 1; c++) {
        for (let d = 0; d <= 1; d++) {
          for (let e = 0; e <= 1; e++) {
            for (let f = 0; f <= 1; f++) {
              newArr.push([a, b, c, d, e, f]);
            }
          }
        }
      }
    }
  }
  return newArr;
};

let scenarios = outcomes();

let games = x => {
  let totals = [];
  let counter = 0;
  for (let i = 0; i < 64; i++) {
    let game = [];
    if (x[i][0] === 0) {
      teams.schulz.wins++;
      teams.schulz.points += 115;
      teams.jseifken.points += 114;
      game.push(teams.jseifken.wins, teams.jseifken.points, "jseifken");
      game.push(teams.schulz.wins, teams.schulz.points, "schulz");
      teams.schulz.wins--;
      teams.schulz.points -= 115;
      teams.jseifken.points -= 114;
    } else {
      teams.jseifken.points++;
      teams.jseifken.points += 114;
      teams.schulz.points += 115;
      game.push(teams.jseifken.wins, teams.jseifken.points, "jseifken");
      game.push(teams.schulz.wins, teams.schulz.points, "schulz");
      teams.jseifken.points--;
      teams.jseifken.points -= 114;
      teams.schulz.points -= 115;
    }
    if (x[i][1] === 0) {
      teams.marchand.wins++;
      teams.marchand.points += 122;
      teams.garnett.points += 117;
      game.push(teams.garnett.wins, teams.garnett.points, "garnett");
      game.push(teams.marchand.wins, teams.marchand.points, "marchand");
      teams.marchand.wins--;
      teams.marchand.points -= 122;
      teams.garnett.points -= 117;
    } else {
      teams.garnett.wins++;
      teams.garnett.points += 117;
      teams.marchand.points += 122;
      game.push(teams.garnett.wins, teams.garnett.points, "garnett");
      game.push(teams.marchand.wins, teams.marchand.points, "marchand");
      teams.garnett.wins--;
      teams.garnett.points -= 117;
      teams.marchand.points -= 122;
    }
    if (x[i][2] === 0) {
      teams.seifken.wins++;
      teams.seifken.points += 120;
      teams.forcier.points += 94;
      game.push(teams.forcier.wins, teams.forcier.points, "forcier");
      game.push(teams.seifken.wins, teams.seifken.points, "seifken");
      teams.seifken.wins--;
      teams.seifken.points -= 120;
      teams.forcier.points -= 94;
    } else if (x[i][2] === 1) {
      teams.forcier.wins++;
      teams.forcier.points += 94;
      teams.seifken.points += 120;
      game.push(teams.forcier.wins, teams.forcier.points, "forcier");
      game.push(teams.seifken.wins, teams.seifken.points, "seifken");
      teams.forcier.wins--;
      teams.forcier.points -= 94;
      teams.seifken.points -= 120;
    }
    if (x[i][3] === 0) {
      teams.ignas.wins++;
      teams.ignas.points += 120;
      teams.quinn.points += 79;
      game.push(teams.ignas.wins, teams.ignas.points, "ignas");
      game.push(teams.quinn.wins, teams.quinn.points, "quinn");
      teams.ignas.wins--;
      teams.ignas.points -= 120;
      teams.quinn.points -= 79;
    } else if (x[i][3] === 1) {
      teams.quinn.wins++;
      teams.quinn.points += 79;
      teams.ignas.points += 120;
      game.push(teams.ignas.wins, teams.ignas.points, "ignas");
      game.push(teams.quinn.wins, teams.quinn.points, "quinn");
      teams.quinn.wins--;
      teams.quinn.points -= 79;
      teams.ignas.points -= 120;
    }
    if (x[i][4] === 0) {
      teams.lavertu.wins++;
      teams.lavertu.points += 94;
      teams.gintof.points += 120;
      game.push(teams.lavertu.wins, teams.lavertu.points, "lavertu");
      game.push(teams.gintof.wins, teams.gintof.points, "gintof");
      teams.lavertu.wins--;
      teams.lavertu.points -= 94;
      teams.gintof.points -= 120;
    } else if (x[i][4] === 1) {
      teams.gintof.wins++;
      teams.gintof.points += 120;
      teams.lavertu.points += 94;
      game.push(teams.lavertu.wins, teams.lavertu.points, "lavertu");
      game.push(teams.gintof.wins, teams.gintof.points, "gintof");
      teams.gintof.wins--;
      teams.gintof.points -= 120;
      teams.lavertu.points -= 94;
    }
    if (x[i][5] === 0) {
      teams.avior.wins++;
      teams.avior.points += 100;
      teams.eaton.points += 112;
      game.push(teams.avior.wins, teams.avior.points, "avior");
      game.push(teams.eaton.wins, teams.eaton.points, "eaton");
      teams.avior.wins--;
      teams.avior.points -= 100;
      teams.eaton.points -= 112;
    } else if (x[i][5] === 1) {
      teams.eaton.wins++;
      teams.eaton.points += 112;
      teams.avior.points += 100;
      game.push(teams.avior.wins, teams.avior.points, "avior");
      game.push(teams.eaton.wins, teams.eaton.points, "eaton");
      teams.eaton.wins--;
      teams.eaton.points -= 112;
      teams.avior.points -= 100;
    }
    totals.push(game);
    counter++;
  }
  let topSix = [];
  // iterating through the games
  for (let i = 0; i < totals.length; i++) {
    let group = [];
    while (group.length <= 15) {
      let pointer = 0;
      let right = totals[i].length - 3;
      // set the biggest to the val at totals[i][left]
      let biggest = totals[i][0];
      let index = 0;
      while (pointer <= right) {
        // move the pointer to the next person's w/l
        pointer += 3;
        if (totals[i][pointer] > biggest) {
          biggest = totals[i][pointer];
          index = pointer;
        } else if (totals[i][pointer] === biggest) {
          if (totals[i][pointer + 1] > totals[i][index + 1]) {
            biggest = totals[i][pointer];
            index = pointer;
          }
        } else {
          continue;
        }
      }
      group.push(biggest, totals[i][index + 1], totals[i][index + 2]);
      totals[i].splice(index, 3);
    }
    topSix.push(group);
  }

  let cache = {};
  for (let i = 0; i < topSix.length; i++) {
    for (let j = 2; j < topSix[i].length; j += 3) {
      if (cache[topSix[i][j]]) {
        cache[topSix[i][j]] += 1;
      } else {
        cache[topSix[i][j]] = 1;
      }
    }
  }
  console.log(cache);
};

let finalOutcomes = games(scenarios);
