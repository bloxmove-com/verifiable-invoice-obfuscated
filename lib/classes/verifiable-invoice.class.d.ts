import { VerifiablePresentation, VerifiableCredential } from '@bloxmove-com/did-asset-library-core-obfuscated';
export declare type VerifiableInvoice = VerifiablePresentation;
/**
 * Interface that an invoice service has to implement.
 */
export interface VerifiableInvoiceUtilService {
    /**
     * Creates a signed invoice
     * @param {invoiceClaims} params the invoice creation parameters
     *
     * @returns {VerifiableInvoice | string}
     */
    create(invoiceClaims: {
        id: string;
        [key: string]: any;
    } | Array<{
        id: string;
        [key: string]: any;
    }>): Promise<VerifiableInvoice | string>;
    /**
     * Verifies a signed invoice
     * @param {VerifiableInvoice | string} invoice the invoice
     *
     * @returns {VerifiableCredential[] | string | undefined}
     */
    verify(invoice: VerifiableInvoice | string): Promise<VerifiableCredential[] | string | undefined>;
}
