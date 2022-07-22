import { VerifiableCredential, AssetService } from '@bloxmove-com//did-asset-library-core-obfuscated';
import { VerifiableInvoiceUtilService, VerifiableInvoice } from '../classes/verifiable-invoice.class';
export interface VPVerifiableInvoiceUtilServiceOptions {
    assetservice: AssetService;
    did: string;
}
export declare class VPVerifiableInvoiceUtilService implements VerifiableInvoiceUtilService {
    private readonly assetService;
    private readonly did;
    constructor(options: VPVerifiableInvoiceUtilServiceOptions);
    create(invoiceClaims: {
        id: string;
        [key: string]: any;
    } | Array<{
        id: string;
        [key: string]: any;
    }>): Promise<VerifiableInvoice | string>;
    verify(invoice: VerifiableInvoice): Promise<VerifiableCredential[]>;
}
