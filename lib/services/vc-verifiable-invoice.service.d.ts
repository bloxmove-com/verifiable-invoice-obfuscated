import { VerifiableCredential, AssetService } from '@bloxmove-com//did-asset-library-core-obfuscated';
import { VerifiableInvoiceUtilService, VerifiableInvoice } from '../classes/verifiable-invoice.class';
export interface VCVerifiableInvoiceUtilServiceOptions {
    assetservice: AssetService;
}
export declare class VCVerifiableInvoiceUtilService implements VerifiableInvoiceUtilService {
    private readonly assetService;
    constructor(options: VCVerifiableInvoiceUtilServiceOptions);
    create(invoiceClaims: {
        id: string;
        [key: string]: any;
    } | Array<{
        id: string;
        [key: string]: any;
    }>): Promise<VerifiableCredential | string>;
    verify(invoice: VerifiableInvoice): Promise<VerifiableInvoice | undefined>;
}
