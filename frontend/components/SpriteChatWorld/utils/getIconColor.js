import { colors } from '@airtable/blocks/ui';

export const Colors = [colors.BLUE, colors.CYAN, colors, colors.GREEN, colors.ORANGE, colors.PINK, colors.PURPLE, colors.RED, colors.TEAL, colors.YELLOW];

function getIconColor(name) {
  return Colors[name.length % Colors.length]
}

export default getIconColor;