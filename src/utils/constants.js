export const COLORS = {
  Primary59: 'var(--color-primary-59)',
  Primary72: 'var(--color-primary-72)',
  Primary78: 'var(--color-primary-78)',
  Primary96: 'var(--color-primary-96)',
  Secondary13: 'var(--color-secondary-13)',
  Secondary23: 'var(--color-secondary-23)',
  Secondary63: 'var(--color-secondary-63)',
  Accent59: 'var(--color-accent-59)',
  Gray55: 'var(--color-gray-55)',
  Gray98: 'var(--color-gray-98)',
  White: 'var(--color-white)',
};

const BREAKPOINTS = {
  mobile: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  mobileAndUp: `(min-width: ${BREAKPOINTS.mobile / 16}rem)`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
