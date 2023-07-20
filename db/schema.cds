namespace golf;

using {managed,cuid} from '@sap/cds/common';

entity Rounds : cuid, managed {

      title     : String(111);
      holes     : Composition of many Holes;
}

entity Holes : cuid {

      holeNumber: Integer @assert.range: [1,20];
      score : Integer;
      par   : Integer;
      round : Association to one Rounds;
      shot : Composition of many Shots;
      result: String;

}

entity Shots: cuid {

  distance: Integer @assert.range: [0,900];
  hole: Association to one Holes;

}