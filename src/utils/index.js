export const prepareLegend = (post) => {
  const legends = [];
  // eslint-disable-next-line
  post.typeofday.map((legend) => {
    if (legend === "hair cut") {
      legends.push({ text: "Cu", color: "bg-pink-100" });
    } else if (legend === "protein treatment") {
      legends.push({ text: "Pr", color: "bg-blue-200" });
    } else if (legend === "hair color") {
      legends.push({ text: "HC", color: "bg-purple-300" });
    } else if (legend === "deep conditioning") {
      legends.push({ text: "DC", color: "bg-green-200" });
    } else if (legend === "clarifying") {
      legends.push({ text: "C", color: "bg-red-300" });
    } else if (legend === "hair oiling") {
      legends.push({ text: "HO", color: "bg-violet-300" });
    }
  });
  return legends.length > 0 ? legends : null;
};
