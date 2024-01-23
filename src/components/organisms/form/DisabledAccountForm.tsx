import { DisabledFormElement } from '@components/molecules';
import { accountFormLabelMapping } from '@mocks/form';
import { Account, AccountFormName } from '@models/form/entity/account';

type DisabledAccountFormProps = {
	defaultValues: Account;
};

const DisabledAccountForm = ({ defaultValues }: DisabledAccountFormProps) => {
	const accountFormName: AccountFormName[] = ['USER', 'BANK', 'ACCOUNT'];

	return (
		<div className="flex flex-col gap-7">
			{accountFormName.map((name, index) => (
				<DisabledFormElement
					key={`disabledAccountForm#${index}`}
					label={accountFormLabelMapping[name]}
					value={defaultValues[name]}
				/>
			))}
		</div>
	);
};

export default DisabledAccountForm;
