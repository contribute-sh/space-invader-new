export interface Vec2 {
  readonly x: number;
  readonly y: number;
}

export interface Entity {
  readonly id: string;
  readonly pos: Vec2;
  readonly vel: Vec2;
  readonly size: Vec2;
  readonly alive: boolean;
}

export interface InputState {
  readonly left: boolean;
  readonly right: boolean;
  readonly up: boolean;
  readonly down: boolean;
  readonly fire: boolean;
}

export interface GameState {
  readonly tick: number;
  readonly entities: ReadonlyArray<Entity>;
  readonly score: number;
  readonly lives: number;
  readonly wave: number;
  readonly phase: "playing" | "gameover";
}
