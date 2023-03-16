import { getBaseRollupPlugins, getPackageJson, resolvePkgPath } from '../utils';

const { name, module } = getPackageJson('react');
const pkgPath = resolvePkgPath('react');
const pkgDistPath = resolvePkgPath('react', true);

export default [
	{
		input: `${pkgPath}/${module}`,
		output: {
			file: `${pkgDistPath}/index.js`,
			name: 'index.js',
			format: 'umd'
		},
		plugins: [...getBaseRollupPlugins()]
	}
];
