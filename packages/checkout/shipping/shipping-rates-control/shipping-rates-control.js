/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import PropTypes from 'prop-types';
import { speak } from '@wordpress/a11y';
import LoadingMask from '@woocommerce/base-components/loading-mask';
import {
	getShippingRatesPackageCount,
	getShippingRatesRateCount,
} from '@woocommerce/base-utils';

/**
 * Internal dependencies
 */
import Package from './package';
import ExperimentalOrderShippingPackages from '../../order-shipping-packages';
import './style.scss';

/**
 * @typedef {import('react')} React
 */

/**
 * Renders the shipping rates control element.
 *
 * @todo Move ShippingRatesControl, TotalsShipping, and ShippingRateSelector to our base components folder.
 * they're too coupled with our base implementation to be exported and we should only export Package.
 *
 * @param {Object} props Incoming props.
 * @param {Array} props.shippingRates Array of packages containing shipping rates.
 * @param {boolean} props.shippingRatesLoading True when rates are being loaded.
 * @param {string} props.className Class name for package rates.
 * @param {boolean} props.collapsible If true, when multiple packages are rendered they can be toggled open and closed.
 * @param {React.ReactElement} props.noResultsMessage Rendered when there are no packages.
 * @param {Function} props.renderOption Function to render a shipping rate.
 */
const ShippingRatesControl = ( {
	shippingRates,
	shippingRatesLoading,
	className,
	collapsible = false,
	noResultsMessage,
	renderOption,
} ) => {
	useEffect( () => {
		if ( shippingRatesLoading ) {
			return;
		}
		const packageCount = getShippingRatesPackageCount( shippingRates );
		const shippingOptions = getShippingRatesRateCount( shippingRates );
		if ( shippingOptions === 0 ) {
			speak(
				__(
					'No shipping options were found.',
					'woo-gutenberg-products-block'
				)
			);
		} else if ( packageCount === 1 ) {
			speak(
				sprintf(
					// translators: %d number of shipping options found.
					_n(
						'%d shipping option was found.',
						'%d shipping options were found.',
						shippingOptions,
						'woo-gutenberg-products-block'
					),
					shippingOptions
				)
			);
		} else {
			speak(
				sprintf(
					// translators: %d number of shipping packages packages.
					_n(
						'Shipping option searched for %d package.',
						'Shipping options searched for %d packages.',
						packageCount,
						'woo-gutenberg-products-block'
					),
					packageCount
				) +
					' ' +
					sprintf(
						// translators: %d number of shipping options available.
						_n(
							'%d shipping option was found',
							'%d shipping options were found',
							shippingOptions,
							'woo-gutenberg-products-block'
						),
						shippingOptions
					)
			);
		}
	}, [ shippingRatesLoading, shippingRates ] );

	return (
		<LoadingMask
			isLoading={ shippingRatesLoading }
			screenReaderLabel={ __(
				'Loading shipping rates…',
				'woo-gutenberg-products-block'
			) }
			showSpinner={ true }
		>
			<ExperimentalOrderShippingPackages.Slot
				className={ className }
				collapsible={ collapsible }
				noResultsMessage={ noResultsMessage }
				renderOption={ renderOption }
			/>
			<ExperimentalOrderShippingPackages>
				<Packages
					packages={ shippingRates }
					noResultsMessage={ noResultsMessage }
				/>
			</ExperimentalOrderShippingPackages>
		</LoadingMask>
	);
};

/**
 * Renders multiple packages within the slotfill.
 *
 * @param {Object} props Incoming props.
 * @param {Array} props.packages Array of packages.
 * @param {React.ReactElement} props.noResultsMessage Rendered when there are no packages.
 * @param {boolean} props.collapsible If the package should be rendered as a
 * collapsible panel.
 * @param {boolean} props.collapse If the panel should be collapsed by default,
 * only works if collapsible is true.
 * @param {boolean} props.showItems If we should items below the package name.
 * @return {React.ReactElement|Array} Rendered components.
 */
const Packages = ( {
	packages,
	collapse,
	showItems,
	collapsible,
	noResultsMessage,
} ) => {
	if ( ! packages.length ) {
		return noResultsMessage;
	}

	return packages.map( ( { package_id: packageId, ...packageData } ) => (
		<Package
			key={ packageId }
			packageId={ packageId }
			packageData={ packageData }
			collapsible={ collapsible }
			collapse={ collapse }
			showItems={ showItems }
		/>
	) );
};

ShippingRatesControl.propTypes = {
	noResultsMessage: PropTypes.node.isRequired,
	renderOption: PropTypes.func,
	className: PropTypes.string,
	collapsible: PropTypes.bool,
	shippingRates: PropTypes.array,
	shippingRatesLoading: PropTypes.bool,
};
export default ShippingRatesControl;
