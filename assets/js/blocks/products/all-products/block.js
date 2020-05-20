/**
 * External dependencies
 */
import { Component } from 'react';
import PropTypes from 'prop-types';
import ProductListContainer from '@woocommerce/base-components/product-list/container';
import { InnerBlockConfigurationProvider } from '@woocommerce/base-context';
import { gridBlockPreview } from '@woocommerce/resource-previews';

/**
 * The All Products Block.
 */
class Block extends Component {
	static propTypes = {
		/**
		 * The attributes for this block.
		 */
		attributes: PropTypes.object.isRequired,
	};

	render() {
		const { attributes, urlParameterSuffix } = this.props;

		if ( attributes.isPreview ) {
			return gridBlockPreview;
		}

		/**
		 * Todo classes
		 *
		 * wp-block-{$this->block_name},
		 * wc-block-{$this->block_name},
		 */
		return (
			<InnerBlockConfigurationProvider
				parentName="woocommerce/all-products"
				layoutStyleClassPrefix="wc-block-grid"
			>
				<ProductListContainer
					attributes={ attributes }
					urlParameterSuffix={ urlParameterSuffix }
				/>
			</InnerBlockConfigurationProvider>
		);
	}
}

export default Block;
