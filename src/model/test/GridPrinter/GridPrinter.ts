export default function (grid: boolean[][]): string {
  let result = "";
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      result += grid[i][j] ? "#" : ".";
    }
    result += "\n";
  }
  return result;
}