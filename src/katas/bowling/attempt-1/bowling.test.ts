import { beforeEach, describe, expect, it } from "vitest";

import { BowlingGame } from "./bowling";

describe("Bowling game", () => {
  let game: BowlingGame;

  beforeEach(() => {
    game = new BowlingGame();
  });

  const rollMany = (times: number, pins: number) => {
    for (let i = 0; i < times; i++) game.roll(pins);
  };

  /** Nine frames of 3 and 4, scoring 63, leaving only the tenth frame in play. */
  const rollNineOpenFrames = () => {
    for (let frame = 0; frame < 9; frame++) {
      game.roll(3);
      game.roll(4);
    }
  };

  it("scores a gutter game as zero", () => {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });

  it("scores twenty rolls of one as twenty", () => {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });

  it("scores open frames as the pins knocked down", () => {
    game.roll(3);
    game.roll(4);
    game.roll(2);
    game.roll(5);
    expect(game.score()).toBe(14);
  });

  it("adds the next roll as a bonus for a spare", () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    expect(game.score()).toBe(16);
  });

  it("adds the next two rolls as a bonus for a strike", () => {
    game.roll(10);
    game.roll(3);
    game.roll(4);
    expect(game.score()).toBe(24);
  });

  it("scores a strike followed by a spare", () => {
    game.roll(10);
    game.roll(5);
    game.roll(5);
    game.roll(3);
    game.roll(4);
    expect(game.score()).toBe(40);
  });

  it("scores a game of all spares", () => {
    rollMany(21, 5);
    expect(game.score()).toBe(150);
  });

  it("allows a bonus roll for a spare in the tenth frame", () => {
    rollNineOpenFrames();
    game.roll(5);
    game.roll(5);
    game.roll(3);
    expect(game.score()).toBe(76);
  });

  it("allows two bonus rolls for a strike in the tenth frame", () => {
    rollNineOpenFrames();
    game.roll(10);
    game.roll(3);
    game.roll(4);
    expect(game.score()).toBe(80);
  });

  it("scores a perfect game as three hundred", () => {
    rollMany(12, 10);
    expect(game.score()).toBe(300);
  });
});
