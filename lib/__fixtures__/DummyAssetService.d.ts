import { DIDDocument } from 'did-resolver';
import { AssetService, IDataProperties, PermissionsEnum, VerifiableCredential, VerifiablePresentation } from '@bloxmove-com/did-asset-library-core-obfuscated';
export declare class DummyAssetService implements AssetService {
    init(): Promise<void>;
    createAsset(assetName: string, initialDataProperties: IDataProperties, assetType?: string, accountAddress?: string): Promise<string>;
    addInvolvedParties(assetDID: string, involvedPartiesDIDs: string[], permissions: PermissionsEnum[]): Promise<void>;
    getInvolvedParties(assetDID: string, permission: PermissionsEnum): Promise<string[]>;
    getOwner(assetDID: string): Promise<string>;
    getDataProperty(assetDID: string, key: string, assetType?: string): Promise<string | null>;
    createDataProperty(assetDID: string, key: string, value: string, assetType?: string, changable?: boolean): Promise<void>;
    updateDataProperty(assetDID: string, key: string, value: string, assetType?: string): Promise<void>;
    getAttestations(assetDID: string, topic: string): Promise<Array<VerifiableCredential | string>>;
    setAttestation(assetDID: string, topic: string, vc: string | VerifiableCredential): Promise<void>;
    resolveName(name: string): Promise<string | null>;
    setName(name: string, assetDID: string): Promise<void>;
    verifySignature(signerDID: string, message: string, signature: string): Promise<boolean>;
    signMessage(message: string): Promise<string>;
    isValidDID(assetDID: string): Promise<boolean>;
    getDIDDocument(assetDID: string): Promise<DIDDocument>;
    setDIDDocument(didDocument: DIDDocument): Promise<void>;
    createVerifiableCredential(type: string[], credentialSubject: {
        id: string;
        [key: string]: any;
    } | Array<{
        id: string;
        [key: string]: any;
    }>, proofPurpose?: string, expirationDate?: string | Date): Promise<VerifiableCredential | string>;
    createVerifiablePresentation(verifiableCredentials: Array<VerifiableCredential | string>, proofPurpose?: string, expirationDate?: string): Promise<VerifiablePresentation | string>;
    validateVerifiableCredential(verifiableCredential: VerifiableCredential | string): Promise<VerifiableCredential | undefined>;
    validateVerifiablePresentation(expectedSignerDid: string, verifiablePresentation: VerifiablePresentation | string): Promise<VerifiableCredential[]>;
}
