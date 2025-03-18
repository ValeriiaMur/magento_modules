<?php
declare(strict_types=0);

namespace SG\ProductConfigurator\Block\Widget;

use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;

class ProductConfigurator extends Template implements BlockInterface
{
    /**
     * @var string
     */
    protected $_template = 'SG_ProductConfigurator::product_configurator.phtml';

    /**
     * Get marketing SKU
     *
     * @return string
     */
    public function getMarketingSku()
    {
        return $this->getData('marketing_sku') ?? '';
    }
}